package com.luo.core.utils;

import it.sauronsoftware.jave.Encoder;
import it.sauronsoftware.jave.MultimediaInfo;

import java.io.File;

public class VideoUtile {

    public static boolean isVideo(String suffix){
        String[] imgSuffix = {"jpg","png"};
        for(String s : imgSuffix){
            if( suffix.equalsIgnoreCase(s) ) {
                return true;
            }
        }
        return false;
    }

    /**
     *  获取视频时长
     * @param source 视频文件
     * @return  返回时长字符串 xxx:xx
     */
    public static String duration(File source){
        Encoder encoder = new Encoder();
        String length = "";
        try {
            MultimediaInfo m = encoder.getInfo(source);
            long ls = m.getDuration()/1000;
            int hour = (int) (ls/3600);
            int minute = (int) (ls%3600)/60;
            int second = (int) (ls-hour*3600-minute*60);
            length = hour+"'"+minute+"''"+second+"'''";
        } catch (Exception e) {
            e.printStackTrace();
        }
        return length;
    }


}
