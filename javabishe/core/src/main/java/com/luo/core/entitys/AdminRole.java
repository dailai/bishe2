package com.luo.core.entitys;

import lombok.Data;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;

@Data
@Entity
@Proxy(lazy = false)
public class AdminRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11)")
    private long id;

    @Column(columnDefinition = "int(11)")
    private long adminUserId;

    @Column(columnDefinition = "int(11)")
    private long roleId;

}
