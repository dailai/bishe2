package com.luo.admin.authorize;

import com.luo.core.entitys.AdminRole;
import com.luo.core.entitys.AdminUser;
import com.luo.core.entitys.Role;
import com.luo.core.repositories.AdminRoleRepository;
import com.luo.core.repositories.AdminUserRepository;
import com.luo.core.repositories.PermissionRepository;
import com.luo.core.repositories.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class AdminUserDetailsService implements UserDetailsService {

    @Autowired
    AdminUserRepository adminUserRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    AdminRoleRepository adminRoleRepository;

    @Autowired
    PermissionRepository permissionRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AdminUser user = adminUserRepository.findAdminUserByUsername(username);

        if (user != null) {
//            List<Permission> permissions = permissionRepository.findByAdminUserId(user.getId());
//            Set<GrantedAuthority> authorities = new HashSet<>();
//            for (Permission permission : permissions) {
//                if (permission != null && permission.getName() != null) {
//
//                    GrantedAuthority grantedAuthority = new SimpleGrantedAuthority("ROLE_" + permission.getIdentity());
//                    authorities.add(grantedAuthority);
//                }
//            }

            AdminRole adminRole = adminRoleRepository.getAdminRoleByAdminUserId(user.getId());
            Role role = roleRepository.getOne(adminRole.getRoleId());
            System.out.println("===============:"+adminRole);
            System.out.println("===============:"+role);
            System.out.println("===============数据库获取用户："+user);
            user.setRole(role);
            return new AdminUserDetails(user);
        } else {
            throw new UsernameNotFoundException("admin: " + username + " do not exist!");
        }
    }
}
