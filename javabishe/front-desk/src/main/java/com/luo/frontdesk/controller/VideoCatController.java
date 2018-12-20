package com.luo.frontdesk.controller;



import com.luo.core.entitys.VideoCat;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.VideoCatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 *  视频分类
 *
 */
@RestController
@RequestMapping(value = "/vc")
public class VideoCatController {

    @Autowired
    VideoCatRepository videoCatRepository;


//    /**
//     * 添加分类
//     * @param videoCat
//     * @return
//     */
//    @RequestMapping(value = "/add",method = RequestMethod.POST)
//    public JSONResult add(VideoCat videoCat){
//        VideoCat res = videoCatRepository.save(videoCat);
//        return new JSONResult();
//    }

    /**
     * 获取所有视频分类
     * @return
     */
    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public JSONResult list(){
        List<VideoCat> videoCats = videoCatRepository.findAll();
        return new JSONResult().put("list",videoCats);
    }

}
