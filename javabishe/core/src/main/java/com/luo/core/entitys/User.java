package com.luo.core.entitys;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Proxy;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 *  用户实体类
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user")
@Proxy(lazy = false)
public class User extends BaseEntity {

    @Column(columnDefinition = "varchar(64) not null default '' comment '昵称'")
    private String nickname;

    @Column(columnDefinition = "varchar(64) not null default '' comment '用户名'")
    private String username;

    @Column(columnDefinition = "varchar(64) not null default '' comment '密码'")
    private String password;

    //头像路径，现在只给默认头像
    @Column(columnDefinition = "varchar(255) default '' comment '头像'")
    private String avatar;

    // 0正常 ，1冻结
    @Column(columnDefinition = "tinyint(4) not null default 0 comment '状态0正常，1冻结'")
    private int status;
//    @Column(columnDefinition = "int(11) not null default 0 comment '段子投稿数量'")
//    private int duanZiNum;

    @Column(columnDefinition = "int(11) not null default 0 comment '视频投稿数量'")
    private int videoNum;

//    //投稿的所有图集
//    @OneToMany()
//    private List<ImgGather> imgGather;

}
