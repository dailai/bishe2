package com.luo.admin.controller;



import com.luo.admin.libs.Pagination;
import com.luo.core.entitys.Video;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.VideoCatRepository;
import com.luo.core.repositories.VideoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;

/**
 *  视频
 *
 */
@Slf4j
@RestController
@RequestMapping(value = "/video")
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

    @Autowired
    VideoCatRepository videoCatRepository;

    @RequestMapping(value = "/info", method = RequestMethod.GET)
    public JSONResult list(@RequestParam(name = "id")Long id){
        Video video = videoRepository.getOne(id);

        return new JSONResult().put("info",video);
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public JSONResult list(@RequestParam(name = "page",defaultValue = "1")int page,
                           @RequestParam(name = "size",defaultValue = "10")int size,
                           @RequestParam(name = "nickname",defaultValue = "")String nickname,
                           @RequestParam(name = "checkStatus",defaultValue = "-1")int checkStatus,
                           @RequestParam(name = "showStatus",defaultValue = "-1")int showStatus,
                           @RequestParam(name = "createTime",defaultValue = "")String createTime){      //createTime暂时不知道如何比较
        System.out.println(checkStatus);
        Specification<Video> specification = new Specification<Video>() {
            @Override
            public Predicate toPredicate(Root<Video> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                List<Predicate> predicates = new ArrayList<>();
                if(!nickname.isEmpty()){
                    Path<String> _nickname = root.get("nickname");
                    predicates.add(criteriaBuilder.equal(_nickname,nickname));
                }
                if(checkStatus != -1){
                    Path<Integer> _checkStatus = root.get("checkStatus");
                    predicates.add(criteriaBuilder.equal(_checkStatus, checkStatus));
                }
                if(showStatus != -1){
                    Path<Integer> _showStatus = root.get("showStatus");
                    predicates.add(criteriaBuilder.equal(_showStatus, showStatus));
                }
                return criteriaBuilder.and(predicates.toArray(new Predicate[predicates.size()]));
            }
        };
        Sort sort = new Sort(Sort.Direction.DESC,"createTime");
        Pageable pageable = PageRequest.of(page-1,size,sort);
        Page<Video>  videoPage = videoRepository.findAll(specification,pageable);
        Pagination pagination = new Pagination((int)videoPage.getTotalElements(),videoPage.getSize(),videoPage.getNumber()+1);
        return new JSONResult().put("videos",videoPage.getContent())
                .put("pagination",pagination);
    }


}
