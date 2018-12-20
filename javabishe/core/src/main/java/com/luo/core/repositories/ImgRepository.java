package com.luo.core.repositories;


import com.luo.core.entitys.Img;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface ImgRepository extends JpaRepository<Img,Long> {

    @Query(value = "update img set img_gather_id=?1 where id=?2",nativeQuery = true)
    @Modifying
    @Transactional
    int updateImgGatherIdById(Long imgGatherId, Long id);

    @Query(value = "update Img i set i.goodNum = ?1 where i.id = ?2",nativeQuery = false)
    @Modifying
    @Transactional
    int updateGoodNum(int goodNum, Long id);


}
