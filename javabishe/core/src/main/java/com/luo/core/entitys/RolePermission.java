package com.luo.core.entitys;

import lombok.Data;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;

@Entity
@Data
@Proxy(lazy = false)
public class RolePermission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11)")
    private long id;

    @Column(columnDefinition = "int(11)")
    private long roleId;

    @Column(columnDefinition = "int(11)")
    private long permissionId;
}
