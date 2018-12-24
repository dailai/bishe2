package com.luo.core.service.imp;

import com.luo.core.entitys.AdminRole;
import com.luo.core.entitys.AdminUser;
import com.luo.core.repositories.AdminRoleRepository;
import com.luo.core.repositories.AdminUserRepository;
import com.luo.core.repositories.RoleRepository;
import com.luo.core.service.AdminUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

@Service
public class AdminUserServiceImp implements AdminUserService {

    @Autowired
    AdminUserRepository adminUserRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AdminRoleRepository adminRoleRepository;

    @Override
    public boolean register(AdminUser adminUser) {
        adminUser.setPassword(DigestUtils.md5DigestAsHex(adminUser.getPassword().getBytes()));
        AdminUser newAdminUser = adminUserRepository.save(adminUser);
        if( newAdminUser == null ){
            return false;
        }
        // 刚注册的管理员用户默认为游客id = "3"
        AdminRole adminRole = new AdminRole();
        adminRole.setAdminUserId(newAdminUser.getId());
        adminRole.setRoleId(3);
        AdminRole newAdminRole = adminRoleRepository.save(adminRole);
        if( newAdminRole == null ){
            return false;
        }
        return true;
    }
}
