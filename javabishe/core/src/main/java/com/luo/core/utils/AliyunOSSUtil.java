package com.luo.core.utils;

import com.aliyun.oss.ClientException;
import com.aliyun.oss.OSSClient;
import com.aliyun.oss.OSSException;
import com.aliyun.oss.model.*;
import com.luo.core.configuration.ConstantProperties;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.text.SimpleDateFormat;
import java.util.*;

public class AliyunOSSUtil {

    private static final org.slf4j.Logger logger = LoggerFactory.getLogger(AliyunOSSUtil.class);

    public static String upload(File file){
        //logger.info("=========>OSS文件上传开始："+file.getName());
        String endpoint= ConstantProperties.SPRING_FILE_ENDPOINT;
        String accessKeyId=ConstantProperties.SPRING_FILE_ACCESS_KEY_ID;
        String accessKeySecret=ConstantProperties.SPRING_FILE_ACCESS_KEY_SECRET;
        String bucketName=ConstantProperties.SPRING_FILE_BUCKET_NAME1;
        String fileHost= ConstantProperties.SPRING_FILE_FILE_HOST;

        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        String dateStr = format.format(new Date());

        if(null == file){
            return null;
        }

        OSSClient ossClient = new OSSClient(endpoint,accessKeyId,accessKeySecret);
        try {
            //容器不存在，就创建
            if(! ossClient.doesBucketExist(bucketName)){
                ossClient.createBucket(bucketName);
                CreateBucketRequest createBucketRequest = new CreateBucketRequest(bucketName);
                createBucketRequest.setCannedACL(CannedAccessControlList.PublicRead);
                ossClient.createBucket(createBucketRequest);
            }
            String fileName = file.getName();
            //创建文件路径
            String fileUrl = dateStr + "/" + UUID.randomUUID().toString().replace("-","")+"."+fileName.substring(fileName.lastIndexOf(".")+1);
            //上传文件
            PutObjectResult result = ossClient.putObject(new PutObjectRequest(bucketName, fileUrl, file));
            //设置权限 这里是公开读
            ossClient.setBucketAcl(bucketName, CannedAccessControlList.PublicRead);
            if(null != result){
                logger.info("==========>OSS文件上传成功,OSS地址："+fileUrl);
                return fileHost+fileUrl;
            }
        }catch (OSSException oe){
            logger.error(oe.getMessage());
        }catch (ClientException ce){
            logger.error(ce.getMessage());
        }finally {
            //关闭
            ossClient.shutdown();
        }
        return null;
    }
}
