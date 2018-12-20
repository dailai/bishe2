package com.luo.core.entitys;


import lombok.AllArgsConstructor;
import lombok.Data;
import org.hibernate.annotations.Proxy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;

/**
 *  视频
 */
@Entity
@Data
@AllArgsConstructor
@Table(name = "video")
@Proxy(lazy = false)
public class Video extends BaseEntity {

    @Column(columnDefinition = "varchar(128) not null default '' comment '标题'")
    private String title;

    @Column(columnDefinition = "text not null comment '简介'")
    private String briefIntroduction;

    @Column(columnDefinition = "varchar(128) not null default '' comment '视频时长'")
    private String duration;

    //封面请求路径
    @Column(columnDefinition = "varchar(128) not null default '' comment '封面路径'")
    private String coverUrl;

    @Column(columnDefinition = "int(11) not null default 0 comment '播放次数'")
    private int playNum;

    @Column(columnDefinition = "int(11) not null default 0 comment '点赞次数'")
    private int goodNum;

    @Column(columnDefinition = "varchar(255) not null default '' comment '视频访问路径'")
    private String url;

    //0已审核，1未审核，2审核中，3未通过
    @Column(columnDefinition = "tinyint(4) not null default 0 comment '审核状态'")
    private int checkStatus;

    //0:不给显示，1：显示
    @Column(columnDefinition = "tinyint(4) not null default 0 comment '显示状态'")
    private int showStatus;


    //投稿人
//    @ManyToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
//    @JoinColumn(name="user_id",referencedColumnName = "id",nullable = true)
//    private User user;
    @Column(columnDefinition = "varchar(64) not null default 0 comment '用户昵称'")
    private String nickname;
//
//    //分类
//    @OneToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
//    @JoinColumn(name="video_cat_id",referencedColumnName = "id",nullable = true)
////    private VideoCat videoCat;
    @Column(columnDefinition = "int(11) not null default 0 comment '视频分类id'")
    private Long videoCatId;

    @Transient
    private User user;

    public Video(String title, String briefIntroduction, String duration, String coverUrl, String url){
        this.title = title;
        this.briefIntroduction = briefIntroduction;
        this.duration = duration;
        this.coverUrl = coverUrl;
        this.url = url;
    }

    public Video(){

    }
}
