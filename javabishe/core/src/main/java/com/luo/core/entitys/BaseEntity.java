package com.luo.core.entitys;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@MappedSuperclass
class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11)")
    private long id;

    @Column(columnDefinition = "timestamp default CURRENT_TIMESTAMP comment '创建时间'", insertable = false, updatable = false)
    private String createTime;
}
