package com.luo.frontdesk.lib;

import lombok.Data;

import java.util.List;

/**
 * @Description:
 * @Date:Create in 2018/10/30 21:59
 */
@Data
public class PageBean<T>{

    //一页大小
    private int pageSize;

    //当前页
    private int current;

    //页总数
    private int pageTotalNum;

    //数据
    private List<T> datas;

    //数据总数
    private int dataTotalNum;

    //开始索引
    private int startIndex;

    public PageBean(int current, int pageSize, int dataTotalNum){
        this.current = current;
        this.pageSize = pageSize;
        this.dataTotalNum = dataTotalNum;

        if(dataTotalNum % pageSize == 0) {
            this.pageTotalNum = dataTotalNum / pageSize;
        }else{
            this.pageTotalNum = dataTotalNum / pageSize + 1;
        }

        this.startIndex = (this.current - 1) * this.pageSize;
    }

}
