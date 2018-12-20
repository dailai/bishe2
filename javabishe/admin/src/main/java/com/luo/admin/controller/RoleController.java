package com.luo.admin.controller;


import com.luo.core.entitys.Role;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/role")
@RestController
public class RoleController {

    @Autowired
    RoleRepository roleRepository;

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public JSONResult list(){
        List<Role> roles = roleRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("roles",roles);
        return jsonResult;
    }

    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public JSONResult add(@RequestParam(name = "id",defaultValue = "-1") Long id,@RequestParam(name = "name") String name){
        if( id != -1 ){                     // 进入里面说明只是修改，不是添加
            int res = roleRepository.updateNameById(name, id);
        }else{
            Role role = new Role();
            role.setName(name);
            Role newRole = roleRepository.save(role);
        }
        List<Role> roles = roleRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("roles",roles);
        return jsonResult;
    }

    @RequestMapping(value = "/remove",method = RequestMethod.GET)
    public JSONResult remove(@RequestParam(name = "id") Long id){
        int res = roleRepository.deleteRoleById(id);
        List<Role> roles = roleRepository.findAll();
        JSONResult jsonResult = new JSONResult();
        jsonResult.put("roles",roles);
        return jsonResult;
    }

}
