package com.luo.core.entitys;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

/**
 *  视频分类
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "video_cat")
public class VideoCat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(columnDefinition = "int(11)")
    private long id;

    @Column(columnDefinition = "timestamp default CURRENT_TIMESTAMP comment '创建时间'", insertable = false, updatable = false)
    private String createTime;

    @Column(columnDefinition = "varchar(64) not null default '' comment '分类名'")
    private String name;
}
