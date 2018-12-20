package com.luo.admin.controller;


import com.luo.core.repositories.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/per")
@RestController
public class PermissionController {

    @Autowired
    PermissionRepository permissionRepository;
}
