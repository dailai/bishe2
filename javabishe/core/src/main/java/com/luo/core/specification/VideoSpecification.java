package com.luo.core.specification;


import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;

public class VideoSpecification<T> implements Specification<T> {

    private Long id;

    public VideoSpecification(Long id){
        this.id = id;
    }

    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        Path<Integer> _checkStatus = root.get("checkStatus");
        Path<Integer> _showStatus = root.get("showStatus");
        Path<Long> _videoCatId = root.get("videoCatId");
        Predicate _key1 = criteriaBuilder.equal(_showStatus, 0);
        Predicate _key2 = criteriaBuilder.equal(_checkStatus, 0);
        Predicate _key3 = criteriaBuilder.equal(_videoCatId, id);
        return criteriaBuilder.and(_key1, _key2, _key3);
    }
}
