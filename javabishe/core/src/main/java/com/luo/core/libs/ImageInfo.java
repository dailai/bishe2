package com.luo.core.libs;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class ImageInfo {

    public static List<Integer> getWidthAndHeight(File imgFile){
        List<Integer> temp = new ArrayList<>();
        FileInputStream fileInputStream = null;
        try {
            fileInputStream = new FileInputStream(imgFile);
            BufferedImage bufferedImage = ImageIO.read(fileInputStream);
            int width = bufferedImage.getWidth();
            int height = bufferedImage.getHeight();
            temp.add(width);
            temp.add(height);
        } catch (IOException e) {
            e.printStackTrace();
        }finally {
            try {
                fileInputStream.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return temp;
    }
}
