package com.luo.core.entitys;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

/**
 *  图片集合实体类，这个不是用户提交的
 */
@Entity
@Data
@AllArgsConstructor
@Table(name = "img_gather")
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler","fieldHandler"})
public class ImgGather extends BaseEntity {


    @Column(columnDefinition = "int(11) not null default 0 comment '图片数量'")
    private int imgNum;

    //0:未审核，1：已审核
    @Column(columnDefinition = "tinyint(4) not null default 1 comment '审核状态'")
    private int checkStatus;

    //0:不给显示，1：显示
    @Column(columnDefinition = "tinyint(4) not null default 1 comment '显示状态'")
    private int showStatus;

    @Column(columnDefinition = "int(11) not null default 0 comment '点赞总数量'")
    private int goodNum;

    //分类id
    @Column(columnDefinition = "int(11) not null default 0 comment '图集分类id'")
    private Long imgCatId;

    //这将在 img 表里面建立一个 img_gather_id 的字段，但不是数据库的外键
    @OneToMany(fetch = FetchType.EAGER,cascade = CascadeType.REMOVE)
    @JoinColumn(name = "img_gather_id",referencedColumnName = "id",nullable = true)
    private Set<Img> imgs;

    public ImgGather(String title,int imgNum){
        this.imgNum = imgNum;
    }

    public ImgGather(){

    }

}
