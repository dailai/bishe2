package com.luo.core.entitys;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 *  图片分类名
 */
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "img_cat")
@JsonIgnoreProperties(value={"hibernateLazyInitializer","handler","fieldHandler"})  //不加的话在查询ImgGather类时会自动查询ImgCat就会报错，这个表示忽略一些里面的东西
public class ImgCat extends BaseEntity {

    @Column(columnDefinition = "varchar(64) not null default '' comment '分类名'")
    private String name;

}
