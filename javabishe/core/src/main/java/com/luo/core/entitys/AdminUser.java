package com.luo.core.entitys;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
@JsonIgnoreProperties({"handler", "hibernateLazyInitializer"})
@Table(indexes = {
        @Index(columnList = "username")
})
public class AdminUser extends BaseEntity {


    @Column(columnDefinition = "varchar(64) not null default '' comment '用户名'")
    private String username;

//    @JsonIgnore
    @Column(columnDefinition = "varchar(32) not null default '' comment '密码'")
    private String password;

    @Column(columnDefinition = "varchar(32) not null default '' comment '姓名'")
    private String name;

    @Column(columnDefinition = "tinyint(11) not null default 0 comment '状态'")
    private int status;

    @Column(columnDefinition = "varchar(255) not null default 'http://localhost:8089/BiazfanxmamNRoxxVxka.png' comment '头像'")
    private String avatar;

    @Column(columnDefinition = "varchar(64) not null default '' comment '邮箱'")
    private String email;

    @Column(columnDefinition = "varchar(128) not null default '' comment '署名'")
    private String signature;

    @Column(columnDefinition = "varchar(128) not null default '' comment '职位'")
    private String title;

    @Column(columnDefinition = "varchar(128) not null default '' comment '标签'")
    private String tags;

    @Column(columnDefinition = "varchar(64) not null default '' comment '手机'")
    private String phone;


    @Transient
    private Role role;

}
