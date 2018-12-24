package com.luo.admin.controller;

import com.luo.admin.authorize.AdminUserDetails;
import com.luo.core.entitys.AdminUser;
import com.luo.core.entitys.Role;
import com.luo.core.libs.JSONResult;
import com.luo.core.libs.StatusCode;
import com.luo.core.repositories.AdminRoleRepository;
import com.luo.core.repositories.AdminUserRepository;
import com.luo.core.repositories.RoleRepository;
import com.luo.core.service.AdminUserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/admin")
public class AdminUserController {

    @Autowired
    AdminUserRepository adminUserRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AdminRoleRepository adminRoleRepository;

    @Autowired
    AdminUserService adminUserService;

    /**
     * 获取当前用户
     * @return
     */
    @RequestMapping(value = "/current",method = RequestMethod.GET)
    public JSONResult getCurrentUser(){
        Object object = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if( object instanceof String ){    // 游客登陆
            return JSONResult.success().put("currentUser",adminUserRepository.findAdminUserByName("111"));
        }
        AdminUserDetails adminUserDetails = (AdminUserDetails) object;
        AdminUser adminUser = adminUserDetails.getAdminUser();

        return JSONResult.success().put("currentUser",adminUser);
    }

    /**
     * 获取所有用户
     * @return
     */
    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public JSONResult list(){
        List<AdminUser> adminUsers = adminUserRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("users",adminUsers);
        return jsonResult;
    }

    /**
     * 删除
     * @param id
     * @return
     */
    @RequestMapping(value="/remove",method = RequestMethod.GET)
    public JSONResult remove(@RequestParam(name = "id")Long id){
        adminUserRepository.deleteById(id);
        List<AdminUser> adminUsers = adminUserRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("users",adminUsers);
        return jsonResult;
    }

    /**
     *  保存修改或添加
     * @param id
     * @param name
     * @param username
     * @param password
     * @param email
     * @param phone
     * @return
     */
    @RequestMapping(value="/save",method = RequestMethod.POST)
    public JSONResult save(@RequestParam(name = "id",defaultValue = "-1")Long id,
                            @RequestParam(name = "name",defaultValue = "")String name,
                           @RequestParam(name = "username",defaultValue = "")String username,
                           @RequestParam(name = "password",defaultValue = "")String password,
                           @RequestParam(name = "email",defaultValue = "")String email,
                           @RequestParam(name = "phone",defaultValue = "")String phone){
        AdminUser adminUser = new AdminUser();
        adminUser.setName(name);
        adminUser.setUsername(username);
        adminUser.setPassword(password);
        adminUser.setEmail(email);
        adminUser.setPhone(phone);
        if( id != -1){
            adminUser.setId(id);
        }
        AdminUser  newAdminUser = adminUserRepository.save(adminUser);
        List<AdminUser> adminUsers = adminUserRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("users",adminUsers);
        return jsonResult;
    }

    /**
     *  注册
     * @param adminUser
     * @return
     */
    @RequestMapping(value="/register",method = RequestMethod.POST)
    public JSONResult register(@RequestBody AdminUser adminUser){
        AdminUser existAdminUser = adminUserRepository.
                findAdminUserByNameOrUsernameOrEmailOrPhone(adminUser.getName(),adminUser.getUsername(),adminUser.getEmail(),adminUser.getPhone());
        if( existAdminUser != null){
            return JSONResult.success(StatusCode.REGISTER_ERROR).put("msg","用户基本信息重复注册！");
        }
        boolean res = adminUserService.register(adminUser);
        if(!res){
            return JSONResult.success(StatusCode.REGISTER_ERROR).put("msg","用户信息保存失败！");
        }
        return JSONResult.success();
    }

}
