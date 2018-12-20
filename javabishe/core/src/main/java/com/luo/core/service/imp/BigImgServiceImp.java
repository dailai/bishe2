package com.luo.core.service.imp;

import com.luo.core.repositories.BigImgRepository;
import com.luo.core.service.BigImgService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BigImgServiceImp implements BigImgService {


    @Autowired
    BigImgRepository bigImgRepository;

    /**
     *  返回大图片地址
     * @return
     */
    @Override
    public String get() {
        List<String> url = bigImgRepository.getUrlByStatus();
        if( url.size() == 0 ){
            List<String> urls = bigImgRepository.getUrlsByCreateTime();
            return urls.get(0);
        }
        if( url.size() >= 1 ){
            List<String> urls = bigImgRepository.getUrlsByStatusAndCreateTime();
            return urls.get(0);
        }
        return url.get(0);
    }
}
