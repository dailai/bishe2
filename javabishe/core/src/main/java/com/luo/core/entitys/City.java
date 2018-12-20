package com.luo.core.entitys;

import javax.persistence.Column;
import javax.persistence.Id;

public class City {

    @Id
    @Column(columnDefinition = "varchar(16) not null default '' comment '编号id'")
    private String cityid;

    @Column(columnDefinition = "varchar(32) not null default '' comment '市'")
    private String city;
}
