package com.luo.admin.configuration;

import com.luo.admin.authorize.AdminUserDetails;
import com.luo.admin.authorize.AdminUserDetailsService;
import com.luo.admin.libs.RenderUtils;
import com.luo.core.entitys.AdminUser;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.util.DigestUtils;


@Configuration
@EnableWebSecurity
//@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Autowired
    AdminUserRepository adminUserRepository;


    @Autowired
    AdminUserDetailsService adminUserDetailsService;

    @Override
    public void configure(WebSecurity web) throws Exception {
        super.configure(web);
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(adminUserDetailsService)
                .passwordEncoder(new PasswordEncoder() {
                    @Override
                    public String encode(CharSequence charSequence) {
                        return DigestUtils.md5DigestAsHex(charSequence.toString().getBytes());
                    }

                    @Override
                    public boolean matches(CharSequence charSequence, String s) {
                        return s.equals(DigestUtils.md5DigestAsHex(charSequence.toString().getBytes()));
                    }
                });
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable()
            //http.authorizeRequests()方法有多个子节点，每个macher按照他们的声明顺序执行
            .authorizeRequests()
            //我们指定任何用户都可以访问多个URL的模式。
            .antMatchers("/*","/admin/*").permitAll()//permitAll() 方法是运行所有权限用户包含匿名用户访问。
            //尚未匹配的任何URL都要求用户进行身份验证
            .anyRequest().authenticated()

            .and()
            .formLogin()
            .loginProcessingUrl("/login")
            .permitAll()
            .successHandler((request, response, auth) -> {
                System.out.println("登陆成功处理====================");
                AdminUserDetails adminUserDetails = (AdminUserDetails) auth.getPrincipal();
                // 登陆成功返回登陆用户数据和权限
                AdminUser adminUser = adminUserDetails.getAdminUser();
                JSONResult result = new JSONResult();
//                    result.put("adminUser", adminUser);
                result.put("role", adminUser.getRole().getName());

                RenderUtils.renderJson(response, result);
            })
            .failureHandler((request, response, exception) -> {
                if (exception instanceof BadCredentialsException) {
                    RenderUtils.renderJson(response, "账号或密码错误");
                } else if (exception instanceof DisabledException) {
                    RenderUtils.renderJson(response, "此账户已被禁用");
                } else {
                    RenderUtils.renderJson(response, "未知错误");
                }
            })

            .and()
            .logout()
            .logoutSuccessHandler((request, response, auth) -> response.sendRedirect("/"))
            .permitAll()

            .and()
            .exceptionHandling()
            .authenticationEntryPoint((request, response, exception) -> {
//                    RenderUtils.renderJson(response, new JSONResult(ErrorCode.NOT_LOGIN, "尚未登录"));
            });
    }
}
