package com.luo.frontdesk;


import com.luo.core.repositories.BigImgRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class BigImgRepsitoryTests {


    @Autowired
    BigImgRepository bigImgRepository;

    /**
     *  测试成功，返回一个地址
     */
    @Test
    public void getUrlByStatus() {
        System.out.println(bigImgRepository.getUrlByStatus());

    }

    /**
     * 测试成功，返回多个地址
     */
    @Test
    public void getUrlsByCreateTime() {
        System.out.println(bigImgRepository.getUrlsByCreateTime());
    }

    /**
     * 测试成功，返回多个地址
     */
    @Test
    public void getUrlsByStatusAndCreateTime() {
        System.out.println(bigImgRepository.getUrlsByStatusAndCreateTime());
    }

}
