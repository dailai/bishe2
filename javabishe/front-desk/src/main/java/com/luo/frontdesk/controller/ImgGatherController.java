package com.luo.frontdesk.controller;



import com.luo.core.entitys.ImgGather;
import com.luo.core.libs.JSONResult;
import com.luo.core.repositories.ImgCatRepository;
import com.luo.core.repositories.ImgGatherRepository;
import com.luo.core.repositories.ImgRepository;
import com.luo.core.repositories.UserRepository;
import com.luo.core.service.ImgGatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *  图集
 */
@RestController
@RequestMapping("/imggather")
public class ImgGatherController {

    @Autowired
    ImgGatherRepository imgGatherRepository;

    @Autowired
    ImgRepository imgRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ImgCatRepository imgCatRepository;

    @Autowired
    ImgGatherService imgGatherService;


    /**
     * 点赞
     * @param id
     * @return
     */
    @RequestMapping(value = "/good",method = RequestMethod.POST)
    public JSONResult good(Long id, Long imgId, int gatherGoodNum, int imgGoodNum){
        int imgRes = imgRepository.updateGoodNum(imgGoodNum+1,imgId);
        int gatherRes = imgGatherRepository.updateGoodNum(gatherGoodNum+1,id);
        if( imgRes != 1 && gatherRes != 1){
            return JSONResult.success();
        }
        return JSONResult.success();
    }

    /**
     * 分页获取图集
     * @param catId 分类id
     * @return
     */
    @RequestMapping(value = "/catget",method = RequestMethod.GET)
    public JSONResult catGet(@RequestParam(name = "catId")Long catId,@RequestParam(name = "page",defaultValue = "0")int page,@RequestParam(name = "size",defaultValue = "36") int size){
        Page<ImgGather> imgGatherPage = imgGatherService.findAllByCatId(catId,page,size);
        System.out.println(imgGatherPage.getNumber());
        return JSONResult.success();
    }

    /**
     *  关闭或显示
     * @param id
     * @return
     */
    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public JSONResult show(@RequestParam(name = "id") Long id){
        ImgGather imgGather = imgGatherRepository.getOne(id);
        imgGather.setShowStatus( !(imgGather.getShowStatus()==1)?1:0);
        ImgGather imgGather1 = imgGatherRepository.save(imgGather);
        return JSONResult.success();
    }
    /**
     *  删除指定id图集
     * @param id
     * @return
     */
    @RequestMapping(value = "/delete",method = RequestMethod.GET)
    public JSONResult delete(Long id){
        ImgGather imgGather = imgGatherRepository.getOne(id);
        imgGatherRepository.delete(imgGather);
        return JSONResult.success();
    }

    /**
     * 获取指定id的图集
     * @param id
     * @return
     */
    @RequestMapping(value = "/get",method = RequestMethod.GET)
    public JSONResult get(Long id){
        ImgGather imgGather = imgGatherRepository.getOne(id);
        return JSONResult.success();
    }

    /**
     * 获取全部
     * @return
     */
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public JSONResult all(){
        return JSONResult.success();
    }
//
//    /**
//     *  添加图集
//     * @return
//     */
//    @RequestMapping(value = "/add",method = RequestMethod.POST)
//    public JSONResult add(String title,int imgNum,Long imgCatId,Long[] imgIdList){
//        ImgGather imgGather = new ImgGather(title,imgNum);
//        imgGather.setImgCatId(imgCatId);
//        ImgGather imgGather1 = imgGatherRepository.save(imgGather);
//        for(Long imgId:imgIdList){
//            imgRepository.updateImgGatherIdById(imgGather1.getId(),imgId);   //修改每一个img记录的外键
//        }
//        return JSONResult.success();
//    }


}
