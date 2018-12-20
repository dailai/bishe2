package com.luo.frontdesk.controller;


import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.ImgRepository;
import com.luo.core.service.ImgService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * 图片
 */
@RestController
@RequestMapping("/img")
public class ImgController {

    @Autowired
    ImgRepository imgRepository;

    @Autowired
    ImgService imgService;



    /**
     * 获取全部
     * @return
     */
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public JSONResult all(){
        return JSONResult.success();
    }

}
