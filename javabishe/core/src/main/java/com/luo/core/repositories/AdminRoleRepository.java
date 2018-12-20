package com.luo.core.repositories;


import com.luo.core.entitys.AdminRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * User: @Faith
 * Date: 2018/8/9
 * Time: 下午6:18
 */
public interface AdminRoleRepository extends JpaRepository<AdminRole, Long> {

    AdminRole getAdminRoleByAdminUserId(Long adminUserId);

    List<AdminRole> findByAdminUserIdIn(Collection<Long> userIds);

    @Modifying
    @Query("delete from AdminRole a where a.adminUserId = ?1")
    Integer deleteByAdminUserId(Long userId);

}
