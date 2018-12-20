package com.luo.frontdesk.controller;


import com.luo.core.entitys.BigImg;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.BigImgRepository;
import com.luo.core.service.BigImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/bigimg")
public class BigImgController {

    @Autowired
    BigImgRepository bigImgRepository;

    @Autowired
    BigImgService bigImgService;

    /**
     * 获取大图片资源地址(url)
     * @return
     */
    @RequestMapping(value = "/get", method = RequestMethod.GET)
    public JSONResult get(){
        String url = bigImgService.get();
        return JSONResult.success().put("url",url);
    }

}
