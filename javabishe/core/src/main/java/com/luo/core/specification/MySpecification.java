package com.luo.core.specification;

import org.springframework.data.jpa.domain.Specification;

import javax.persistence.criteria.*;


public class MySpecification<T> implements Specification<T> {
    @Override
    public Predicate toPredicate(Root<T> root, CriteriaQuery<?> criteriaQuery, CriteriaBuilder criteriaBuilder) {
        Path<Integer> _checkStatus = root.get("checkStatus");
        Path<Integer> _showStatus = root.get("showStatus");
        Predicate _key1 = criteriaBuilder.equal(_showStatus, 0);
        Predicate _key2 = criteriaBuilder.equal(_checkStatus, 0);
        return criteriaBuilder.and(_key1, _key2);
    }
}
