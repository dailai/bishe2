package com.luo.core.service.imp;


import com.luo.core.entitys.ImgGather;
import com.luo.core.repositories.ImgGatherRepository;

import com.luo.core.service.ImgGatherService;
import com.luo.core.specification.MySpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.*;


@Service
public class ImgGatherServiceImp implements ImgGatherService {

    @Autowired
    ImgGatherRepository imgGatherRepository;

    @Override
    public Page<ImgGather> findAllByCatId(Long catId, int page, int size) {
        Specification<ImgGather> specification = null;
        if(catId == 0){
            specification = new MySpecification<ImgGather>();
        }else {
            specification = new Specification<ImgGather>() {
                @Override
                public Predicate toPredicate(Root<ImgGather> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
                    Path<Integer> _checkStatus = root.get("checkStatus");
                    Path<Integer> _showStatus = root.get("showStatus");
                    Path<Long> _imgCatId = root.get("imgCatId");
                    Predicate _key1 = criteriaBuilder.equal(_showStatus, 1);
                    Predicate _key2 = criteriaBuilder.equal(_checkStatus, 1);
                    Predicate _key3 = criteriaBuilder.equal(_imgCatId, catId);
                    return criteriaBuilder.and(_key1, _key2, _key3);
                }
            };
        }
        Sort sort = new Sort(Sort.Direction.DESC,"createTime");
        Pageable pageable = PageRequest.of(page,size,sort);
        Page<ImgGather> imgGatherPage = imgGatherRepository.findAll(specification,pageable);
        return imgGatherPage;
    }
}
