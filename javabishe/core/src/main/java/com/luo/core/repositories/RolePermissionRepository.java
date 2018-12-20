package com.luo.core.repositories;



import com.luo.core.entitys.RolePermission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface RolePermissionRepository extends JpaRepository<RolePermission, Long> {
    List<RolePermission> findByRoleIdIn(Collection<Long> rolesId);

    List<RolePermission> findByRoleId(Long roleId);

    @Modifying
    @Query("delete from RolePermission rp where rp.roleId = ?1")
    Integer deleteAllByRoleId(Long roleId);
}
