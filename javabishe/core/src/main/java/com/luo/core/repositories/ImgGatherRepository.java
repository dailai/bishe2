package com.luo.core.repositories;


import com.luo.core.entitys.ImgGather;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface ImgGatherRepository extends JpaRepository<ImgGather,Long>, JpaSpecificationExecutor<ImgGather> {

    @Query(value = "update ImgGather i set i.goodNum = ?1 where i.id = ?2",nativeQuery = false)
    @Modifying
    @Transactional
    int updateGoodNum(int goodNum, Long id);
}
