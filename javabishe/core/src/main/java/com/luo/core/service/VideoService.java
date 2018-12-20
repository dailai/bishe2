package com.luo.core.service;


import com.luo.core.entitys.Video;
import org.springframework.data.domain.Page;

public interface VideoService {

    Page<Video> timeSortPage(Long catId, int page, int size);
    Page<Video> heatSortPage(Long catId, int page, int size);
}
