package com.luo.frontdesk.controller;




import com.luo.core.entitys.ImgCat;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.ImgCatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *  图集分类
 *
 */
@RestController
@RequestMapping("/imgcat")
public class ImgCatController {

    @Autowired
    ImgCatRepository imgCatRepository;

    @RequestMapping("/add")
    public JSONResult add(ImgCat imgCat){
        ImgCat imgCat1 = imgCatRepository.save(imgCat);
        return JSONResult.success();
    }

    /**
     * 获取全部分类
     * @return
     */
    @RequestMapping("/all")
    public JSONResult get(){
        return JSONResult.success();
    }
}
