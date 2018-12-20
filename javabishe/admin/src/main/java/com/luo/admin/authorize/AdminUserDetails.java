package com.luo.admin.authorize;



import com.luo.core.entitys.AdminUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public class AdminUserDetails implements UserDetails {
    private AdminUser adminUser;
    private Collection<? extends GrantedAuthority> authorities;

    public AdminUserDetails(AdminUser adminUser){
        this.adminUser = adminUser;
    }

    public AdminUserDetails(AdminUser adminUser, Collection<? extends GrantedAuthority> authorities) {
        this.adminUser = adminUser;
        this.authorities = authorities;
    }

    public AdminUser getAdminUser() {
        return adminUser;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return adminUser.getPassword();
    }

    @Override
    public String getUsername() {
        return adminUser.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        System.out.println(" ======================="+adminUser);
        return adminUser.getStatus() == 1;
    }
}
