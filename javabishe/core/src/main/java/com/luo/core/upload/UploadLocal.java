package com.luo.core.upload;


import com.luo.core.libs.JSONResult;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Component
public class UploadLocal extends AbstractFileUpload {

    private static final String LOCAL_PATH = "F:/test/videotest/";
    private static final String URL_PREFIX = "http://localhost:8080/videotest/";

    @Override
    public String upload(MultipartFile file) throws IOException {
        //获取上传文件名
        String filename = file.getOriginalFilename();
        //修改上传文件名
        filename = new SimpleDateFormat(DATE_FORMAT).format(new Date()) +
                UUID.randomUUID().toString().replace("-","")+"."+filename.substring(filename.lastIndexOf(".")+1);
        //文件保存路径
        String path = LOCAL_PATH+filename;
        //创建文件路径
        File dest = new File(path);
        //获取父目录
        File fileParent = dest.getParentFile();
        //判断文件父目录是否存在
        if(!fileParent.exists()){
            //创建父目录文件
            fileParent.mkdirs();
        }
        //上传文件
        file.transferTo(dest);
        // 生成可以让前端访问的资源路径
        //url="http://你自己的域名/项目名/images/"+filename;//正式项目
        String url = URL_PREFIX+filename;//本地运行项目
        return url;
    }

}
