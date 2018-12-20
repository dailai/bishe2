package com.luo.admin.libs;

import lombok.Data;

import java.util.HashMap;
import java.util.Map;

/**
 * @Description:
 * @Date:Create in 2018/10/18 16:40
 */
@Data
public class JSONResult {

    //响应业务状态
    private String status = "ok";

    //响应数据
    private Map<String,Object> data = new HashMap<>();

    public static JSONResult success(Map<String,Object> data){
        return new JSONResult(data);
    }


    public static JSONResult error(){
        return new JSONResult("no");
    }


    public JSONResult(){
    }

    public JSONResult(String status){
        this.status = status;
    }

    public JSONResult put(String key, Object value){
        this.data.put(key,value);
        return this;
    }

    private JSONResult(Map<String,Object> data){

        this.data = data;
    }


}
