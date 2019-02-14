package com.luo.core.upload;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface FileUpload {


    String upload(MultipartFile file) throws IOException;
}
