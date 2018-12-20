package com.luo.core.repositories;



import com.luo.core.entitys.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface RoleRepository extends JpaRepository<Role, Long>, JpaSpecificationExecutor<Role> {
    Role findByName(String name);

    @Transactional
    @Modifying
    @Query("delete from Role r where r.id = ?1")
    Integer deleteRoleById(Long id);

    @Transactional
    @Modifying
    @Query("update Role r set r.name = ?1 where r.id = ?2")
    Integer updateNameById(String nameLong, Long id);
}
