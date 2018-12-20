package com.luo.core.entitys;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "img")
public class Img extends BaseEntity {

    @Column(columnDefinition = "varchar(128) not null default '' comment '图片文件名'")
    private String imgName;

    @Column(columnDefinition = "varchar(128) not null default '' comment '标题'")
    private String title;

    @Column(columnDefinition = "varchar(256) not null default '' comment '图片访问路径'")
    private String path;

    @Column(columnDefinition = "int(11) not null default 0 comment '宽'")
    private int width;

    @Column(columnDefinition = "int(11) not null default 0 comment '高'")
    private int height;

    @Column(columnDefinition = "int(11) not null default 0 comment '点赞数量'")
    private int goodNum;

}
