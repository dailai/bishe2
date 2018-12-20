package com.luo.core.service.imp;


import com.luo.core.entitys.Img;
import com.luo.core.libs.ImageInfo;
import com.luo.core.repositories.ImgRepository;

import com.luo.core.service.ImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.List;

@Service
public class ImServiceImp implements ImgService {

    @Autowired
    ImgRepository imgRepository;

    @Override
    public Img add(String imgName, String urlPath, String imgPath) {
        File imgFile = new File(imgPath);
        List<Integer> res= ImageInfo.getWidthAndHeight(imgFile);

        Img img = new Img();
        img.setImgName(imgName);
        img.setPath(urlPath);
        img.setWidth(res.get(0));
        img.setHeight(res.get(1));
        img = imgRepository.save(img);
        if(img == null){
            return null;
        }
        return img;
    }
}
