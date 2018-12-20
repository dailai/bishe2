package com.luo.core.libs;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description:
 * @Date:Create in 2018/10/18 16:40
 */
@Data
public class JSONResult {


    // 响应码
    private int code = StatusCode.SUCCESS;

    // 响应状态
    private String status = "ok";

    // 响应数据
    private Map<String,Object> data = new HashMap<>();

    public static JSONResult success(){
        return new JSONResult();
    }

    public static JSONResult success(int code){
        return new JSONResult(code);
    }

    public JSONResult(){
    }

    public JSONResult(int code){
        this.code = code;
    }

    public JSONResult put(String key, Object value){
        this.data.put(key,value);
        return this;
    }

    private JSONResult(Map<String,Object> data){

        this.data = data;
    }


}
