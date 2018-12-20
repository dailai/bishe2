package com.luo.core.entitys;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;

@Data
public class Province {

    @Id
    @Column(columnDefinition = "varchar(16) not null default '' comment '编号id'")
    private String provid;

    @Column(columnDefinition = "varchar(32) not null default '' comment '省'")
    private String province;
}
