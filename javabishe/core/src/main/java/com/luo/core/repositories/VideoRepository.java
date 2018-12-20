package com.luo.core.repositories;



import com.luo.core.entitys.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface VideoRepository extends JpaRepository<Video,Long>, JpaSpecificationExecutor<Video> {

    @Query(value = "update Video v set v.goodNum = ?1 where v.id = ?2",nativeQuery = true)
    @Modifying
    @Transactional
    int updateGoodNum(int goodNum, Long id);
}
