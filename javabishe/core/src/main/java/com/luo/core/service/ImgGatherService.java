package com.luo.core.service;


import com.luo.core.entitys.ImgGather;
import org.springframework.data.domain.Page;

public interface ImgGatherService {

    Page<ImgGather> findAllByCatId(Long catId, int page, int size);
}
