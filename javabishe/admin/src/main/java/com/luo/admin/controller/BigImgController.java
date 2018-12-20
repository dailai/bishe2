package com.luo.admin.controller;


import com.luo.core.entitys.BigImg;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.BigImgRepository;
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

    @RequestMapping(value = "/remove", method = RequestMethod.GET)
    public JSONResult list(@RequestParam(name = "id")Long id){
        bigImgRepository.deleteById(id);
        List<BigImg> bigImgs = bigImgRepository.findAll();
        return new JSONResult().put("list",bigImgs);
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public JSONResult list(){
        List<BigImg> bigImgs = bigImgRepository.findAll();
        return new JSONResult().put("list",bigImgs);
    }

    @RequestMapping(value = "/status", method = RequestMethod.GET)
    public JSONResult status(@RequestParam(name = "id")Long id,
                             @RequestParam(name = "status")int status){
        bigImgRepository.updateStatusByBigImgId(status,id);
        bigImgRepository.updateOtherStatusByBigImgId(1,id);
        List<BigImg> bigImgs = bigImgRepository.findAll();
        return new JSONResult().put("list",bigImgs);
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public JSONResult add(@RequestParam(name = "name")String name,
                          @RequestParam(name = "title")String title,
                          @RequestParam(name = "width")int width,
                          @RequestParam(name = "height")int height,
                          @RequestParam(name = "url")String url){
        BigImg bigImg = new BigImg();
        bigImg.setName(name);
        bigImg.setTitle(title);
        bigImg.setWidth(width);
        bigImg.setHeight(height);
        bigImg.setUrl(url);
        bigImg.setStatus(1);
        BigImg newBigImg = bigImgRepository.save(bigImg);
        List<BigImg> bigImgs = bigImgRepository.findAll();
        return new JSONResult().put("list",bigImgs);
    }
}
