package com.luo.core.entitys;

import lombok.Data;
import org.hibernate.annotations.Proxy;

import javax.persistence.Column;
import javax.persistence.Entity;

@Data
@Entity
@Proxy(lazy = false)
public class BigImg extends BaseEntity {

    @Column(columnDefinition = "varchar(128) not null default '' comment '标题'")
    private String title;

    @Column(columnDefinition = "varchar(64) not null default '' comment '操作员名字'")
    private String name;

    @Column(columnDefinition = "varchar(255) not null default '' comment '资源路径'")
    private String url;

    // 0 显示，1 禁止
    @Column(columnDefinition = "tinyint(4) not null default 1 comment '显示状态'")
    private int status;

    @Column(columnDefinition = "int(11) not null default 0 comment '宽'")
    private int width;

    @Column(columnDefinition = "int(11) not null default 0 comment '高'")
    private int height;
}
