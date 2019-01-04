package com.luo.admin;


import com.luo.core.entitys.AdminUser;
import com.luo.core.repositories.AdminUserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class AdminUserRepositoryTests {

    @Autowired
    AdminUserRepository adminUserRepository;

    /**
     * 测试成功
     */
    @Test
    public void findAdminUserByNameOrUsernameOrEmailOrPhone(){
//        AdminUser adminUser = adminUserRepository.
//                findAdminUserByNameOrUsernameOrEmailOrPhone("123",
//                        "","","");
//        System.out.println(adminUser);
    }
}
