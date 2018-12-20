package com.luo.core.repositories;


import com.luo.core.entitys.BigImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;
import java.util.List;

public interface BigImgRepository  extends JpaRepository<BigImg, Long>{

    @Transactional
    @Modifying
    @Query(value = "update BigImg b set b.status=?1 where b.id=?2")
    int updateStatusByBigImgId(int status, Long id);

    @Transactional
    @Modifying
    @Query(value = "update BigImg b set b.status=?1 where b.id <> ?2")
    int updateOtherStatusByBigImgId(int status, Long id);

    @Query(value = "select b.url from BigImg b where b.status = 1")
    List<String> getUrlByStatus();

    @Query(value = "select b.url from BigImg b order by b.createTime desc")
    List<String> getUrlsByCreateTime();

    @Query(value = "select b.url from BigImg b where b.status = 1 order by b.createTime desc")
    List<String> getUrlsByStatusAndCreateTime();
}
