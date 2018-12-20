package com.luo.admin.controller;

import com.luo.core.entitys.AdminUser;
import com.luo.core.entitys.Role;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.AdminUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/adminUser")
public class AdminUserController {

    @Autowired
    AdminUserRepository adminUserRepository;

    /**
     * 获取当前用户
     * @return
     */
    @RequestMapping(value = "/current",method = RequestMethod.GET)
    public JSONResult getCurrentUser(){
//        AdminUserDetails adminUserDetails = (AdminUserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        JSONResult jsonResult = new JSONResult();
        Role role = new Role(1,"admin");
        AdminUser adminUser = new AdminUser();
        adminUser.setId(1);
        adminUser.setCreateTime("2018-12-06 19:03:00.0");
        adminUser.setUsername("123");
        adminUser.setPassword("123");
        adminUser.setName("name");
        adminUser.setStatus(1);
        adminUser.setAvatar("http://localhost:8089/BiazfanxmamNRoxxVxka.png");
        adminUser.setEmail("123");
        adminUser.setSignature("123");
        adminUser.setTitle("123");
        adminUser.setPhone("123");
        adminUser.setRole(role);

        jsonResult.put("currentUser",adminUser);
//        jsonResult.put("currentUser",adminUserDetails.getAdminUser());

        return jsonResult;
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

    @RequestMapping(value="/register",method = RequestMethod.POST)
    public JSONResult register(@RequestParam(name = "name",defaultValue = "")String name,
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
        AdminUser  newAdminUser=adminUserRepository.save(adminUser);
        return new JSONResult();
    }
}
