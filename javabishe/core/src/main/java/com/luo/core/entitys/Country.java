package com.luo.core.entitys;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Id;

@Data

public class Country {

    @Id
    @Column(columnDefinition = "varchar(16) not null default '' comment '编号id'")
    private String counid;

    @Column(columnDefinition = "varchar(32) not null default '中国' comment '国家/地区'")
    private String country;

}
