package com.luo.core.service.imp;


import com.luo.core.entitys.Video;
import com.luo.core.repositories.VideoRepository;

import com.luo.core.service.VideoService;
import com.luo.core.specification.VideoSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

@Service
public class VideoServiceImp implements VideoService {

    @Autowired
    VideoRepository videoRepository;

    /**
     *  按热度顺序查询
     * @param catId
     * @param page
     * @param size
     * @return
     */
    public Page<Video> heatSortPage(Long catId, int page, int size){
        Specification<Video> specification = new VideoSpecification<Video>(catId);
        Sort sort = new Sort(Sort.Direction.DESC,"goodNum","playNum");
        Pageable pageable = PageRequest.of(page,size,sort);
        Page<Video> page1 = videoRepository.findAll(specification,pageable);
        return page1;
    }

    /**
     * 按时间降序查询
     * @param catId 分类id
     * @param page  页码
     * @param size  数量
     * @return
     */
    @Override
    public Page<Video> timeSortPage(Long catId, int page, int size) {
        Specification<Video> specification = new VideoSpecification<Video>(catId);
        Sort sort = new Sort(Sort.Direction.DESC,"createTime");
        Pageable pageable = PageRequest.of(page,size,sort);
        Page<Video> page1 = videoRepository.findAll(specification,pageable);
        return page1;
    }
}
