package com.luo.core.upload;

import com.luo.core.utils.AliyunOSSUtil;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class OSSFileUpload extends AbstractOSSFileUpload {


    @Override
    public String upload(MultipartFile file) {
        //获取上传文件名
        String filename = file.getOriginalFilename();
        File newFile = new File(filename);
        FileOutputStream os = null;
        try {
            os = new FileOutputStream(newFile);
            os.write(file.getBytes());
            file.transferTo(newFile);
            //上传到OSS
            String url = AliyunOSSUtil.upload(newFile);
            //返回资源路径
            return url;
        }catch (IOException e){
            System.out.println();
            return null;
        }finally {
            if(os != null){
                try {
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            newFile.delete();
        }

    }


}
