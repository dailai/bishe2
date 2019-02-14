package com.luo.core.upload;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public abstract class AbstractFileUpload implements FileUpload {

    private Logger logger = LoggerFactory.getLogger(AbstractOSSFileUpload.class);

    protected static final String DATE_FORMAT = "yyyy-MM-dd";

}
