package com.luo.core.repositories;



import com.luo.core.entitys.AdminUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Created by IntelliJ IDEA.
 * User: @Faith
 * Date: 2018/7/24
 * Time: 下午2:29
 */
public interface AdminUserRepository extends JpaRepository<AdminUser, Long>, JpaSpecificationExecutor<AdminUser> {

    AdminUser findAdminUserByUsername(String username);

    AdminUser findAdminUserByName(String name);

    AdminUser findAdminUserByNameOrUsernameOrEmailOrPhone(String name,
                                                          String username,
                                                          String Email,
                                                          String Phone);

}
