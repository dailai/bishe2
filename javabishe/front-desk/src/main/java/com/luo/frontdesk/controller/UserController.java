package com.luo.frontdesk.controller;


import com.luo.core.entitys.User;
import com.luo.core.libs.JSONResult;
import com.luo.core.libs.StatusCode;
import com.luo.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *  用户
 *
 */
@RestController
@RequestMapping(value ="/user")
public class UserController {

    @Autowired
    UserRepository userRepository;


    /**
     *  登出
     * @param username
     * @return
     */
    @RequestMapping(value = "/signout",method = RequestMethod.POST)
    public JSONResult out(String username) {
        User user = userRepository.getByUsername(username);
        if( user == null){
            return JSONResult.success(StatusCode.SQL_NO).put("msg","没有该用户");
        }
        return JSONResult.success();
    }

    /**
     * 登陆
     * @param username
     * @param password
     * @return
     */
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public JSONResult login(String username,String password){
        System.out.println("登陆用户："+username+"  "+password);
        User user = userRepository.getByUsername(username);
        if(user == null){
            return JSONResult.success(StatusCode.LOGIN_ERROR).put("msg","请输入用户名和密码！");
        }
        password = DigestUtils.md5DigestAsHex(password.getBytes());     //spring自带的md5加密方式
        if(!user.getPassword().equals(password)){
            return JSONResult.success(StatusCode.LOGIN_ERROR).put("msg","用户名或密码错误！");
        }
        return JSONResult.success().put("user",user);
    }

    /**
     * 注册
     * @param user
     * @return
     */
    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public JSONResult register(User user){
        if(userRepository.getByUsername(user.getUsername()) != null ){
            return JSONResult.success(StatusCode.REGISTER_ERROR).put("msg","用户名已被注册！");
        }
        if(userRepository.getByNickname(user.getNickname()) != null ){
            return JSONResult.success(StatusCode.REGISTER_ERROR).put("msg","昵称重复了！");
        }
        System.out.println("注册用户："+user);
        user.setPassword(DigestUtils.md5DigestAsHex(user.getPassword().getBytes()));
        User newUser = userRepository.save(user);
        if( newUser == null ){
            return JSONResult.success(StatusCode.REGISTER_ERROR).put("msg","注册失败！");
        }
        return JSONResult.success();
    }


}
