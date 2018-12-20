package com.luo.core.controller;


import com.luo.core.libs.JSONResult;
import com.luo.core.libs.StatusCode;
import com.luo.core.utils.AliyunOSSUtil;
import com.luo.core.utils.VideoUtile;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@RestController
@Slf4j
@RequestMapping("/upload")
public class UploadController {

    /**
     * 文件上传至阿里云oss
     * @param file
     */
    @RequestMapping(value = "/uposs",method = RequestMethod.POST)
    public JSONResult uploadFile(MultipartFile file){
        try {
            if(null == file){
                return JSONResult.success(StatusCode.FILE_ERROR).put("msg","上传文件不存在");
            }
            String filename = file.getOriginalFilename();
            if("".equals(filename.trim())){
                return JSONResult.success(StatusCode.FILE_ERROR).put("msg","上传文件名不能为空");
            }
            File newFile = new File(filename);
            FileOutputStream os = new FileOutputStream(newFile);
            os.write(file.getBytes());
            os.close();
            file.transferTo(newFile);
            System.out.println("文件大小："+newFile.length());
            //上传到OSS
            String url = AliyunOSSUtil.partUpload(newFile);
            JSONResult jsonResult = new JSONResult();
            newFile.delete();
            return jsonResult.put("url",url);         //返回资源路径
        }catch (Exception e){
            log.error(e.getMessage());
            return new JSONResult();
        }
    }

    /**
     *  上传到本地
     * @param file  文件
     * @return
     */
    @RequestMapping(value = "/up",method = RequestMethod.POST)
    public JSONResult upload(MultipartFile file){
        if(file.isEmpty()){
            return new JSONResult().put("error","文件是空的！");
        }
        //获取文件名
        String filename = file.getOriginalFilename();
//        System.out.println("上传文件名为："+filename);
        filename = new SimpleDateFormat("yyyy-MM-dd").format(new Date()) +
                UUID.randomUUID().toString().replace("-","")+"."+filename.substring(filename.lastIndexOf(".")+1);
        System.out.print("保存的文件名为: "+filename);

        //文件保存路径
        String path = "F:/test/videotest/"+filename;
        System.out.println(" 文件保存的路径："+ path);
        //创建文件路径
        File dest = new File(path);
        //获取父目录
        File fileParent = dest.getParentFile();
        //判断文件父目录是否存在
//        if(!fileParent.exists()){
//            //创建父目录文件
//            fileParent.mkdirs();
//        }
        try{
            //上传文件
            file.transferTo(dest);
            System.out.println("文件保存完毕："+path);
            // 生成可以让前端访问的资源路径
            //url="http://你自己的域名/项目名/images/"+filename;//正式项目
            String url = "http://localhost:8080/videotest/"+filename;//本地运行项目
            System.out.println(url);
            //返回文件资源访问路径
            return new JSONResult().put("url",url);

        }catch (Exception e){
            return new JSONResult().put("error","未知错误！");
        }
    }
}
