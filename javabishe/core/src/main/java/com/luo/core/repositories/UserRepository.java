package com.luo.core.repositories;



import com.luo.core.entitys.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import javax.transaction.Transactional;

public interface UserRepository extends JpaRepository<User,Long> {

    User getByUsername(String username);

    User getByNickname(String nickname);

    @Transactional
    @Modifying
    @Query(value = "update User u set u.status=?1 where u.id=?2")
    int updateStatusByUserId(int status, Long id);
}
