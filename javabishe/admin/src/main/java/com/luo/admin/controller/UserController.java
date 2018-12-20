package com.luo.admin.controller;


import com.luo.core.entitys.User;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
     * 获取id用户所有信息
     * @return
     */
    @RequestMapping(value = "/info",method = RequestMethod.GET)
    public JSONResult info(@RequestParam(name = "id")Long id) {
        User user = userRepository.getOne(id);
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("user",user);
        return jsonResult;
    }


    /**
     * 获取用户所有信息
     * @return
     */
    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public JSONResult list() {
        List<User> users = userRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("users",users);
        return jsonResult;
    }

    /**
     * 改变状态
     * @return
     */
    @RequestMapping(value = "/cgStatus",method = RequestMethod.GET)
    public JSONResult cgStatus(int status,Long id) {
        int res = userRepository.updateStatusByUserId(status,id);
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("res",res);
        return jsonResult;
    }

    /**
     * 删除
     * @return
     */
    @RequestMapping(value = "/remove",method = RequestMethod.GET)
    public JSONResult remove(Long id) {
        userRepository.deleteById(id);
        JSONResult jsonResult = new JSONResult();
        return jsonResult;
    }
}
