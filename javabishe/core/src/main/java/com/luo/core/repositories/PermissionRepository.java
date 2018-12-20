package com.luo.core.repositories;



import com.luo.core.entitys.Permission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PermissionRepository extends JpaRepository<Permission, Long>, JpaSpecificationExecutor<Permission> {
    @Query(nativeQuery = true)
    List<Permission> findByAdminUserId(long adminUserId);
}
