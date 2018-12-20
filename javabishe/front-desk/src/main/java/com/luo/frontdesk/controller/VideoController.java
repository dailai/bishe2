package com.luo.frontdesk.controller;



import com.luo.core.entitys.User;
import com.luo.core.entitys.Video;
import com.luo.core.entitys.VideoCat;
import com.luo.core.libs.JSONResult;
import com.luo.core.libs.StatusCode;
import com.luo.core.repositories.UserRepository;
import com.luo.core.repositories.VideoCatRepository;
import com.luo.core.repositories.VideoRepository;
import com.luo.core.service.VideoService;
import com.luo.core.specification.MySpecification;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 *  视频
 *
 */
@Slf4j
@RestController
@RequestMapping(value = "/video")
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

    @Autowired
    VideoCatRepository videoCatRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    VideoService videoService;


    /**
     * 按时间降序获取
     * @param catId
     * @param page
     * @param size
     * @return
     */
    @RequestMapping(value = "/ts",method = RequestMethod.GET)
    public JSONResult timeSort(Long catId,
                               @RequestParam(defaultValue = "0")int page,
                               @RequestParam(defaultValue = "16")int size){
        Page<Video> videoPage = videoService.timeSortPage(catId,page,size);
        return new JSONResult().put("data",videoPage);
    }

    @RequestMapping(value = "/hs",method = RequestMethod.GET)
    public JSONResult heatSort(Long catId,
                               @RequestParam(defaultValue = "0")int page,
                               @RequestParam(defaultValue = "16")int size){
        Page<Video> videoPage = videoService.heatSortPage(catId,page,size);
        return new JSONResult().put("data",videoPage);
    }

    /**
     *  显示推荐
     * @return
     */
    @RequestMapping(value = "/recomm",method = RequestMethod.GET)
    public JSONResult recomm(){
        Specification<Video> Specification = new MySpecification<Video>();
        Sort sort = new Sort(Sort.Direction.DESC,"createTime","playNum","goodNum");
        Pageable pageable = PageRequest.of(0,8,sort);
        Page<Video> videoPage = videoRepository.findAll(Specification,pageable);
        return new JSONResult().put("data",videoPage);
    }

    /**
     * 播放，修改播放次数
     * @param id
     * @return
     */
    @RequestMapping(value = "/play",method = RequestMethod.GET)
    public JSONResult play(Long id){
        Video video = videoRepository.getOne(id);
        int prevPlayNum =  video.getPlayNum();
        video.setPlayNum(prevPlayNum+1);
        Video newVideo = videoRepository.save(video);
        return new JSONResult().put("video",newVideo);
    }

    /**
     * 点赞
     * @param id
     * @return
     */
    @RequestMapping(value = "/good",method = RequestMethod.GET)
    public JSONResult good(Long id,int goodNum){
        int res = videoRepository.updateGoodNum(goodNum,id);
        if(res != 1){
            return JSONResult.success(StatusCode.ERROR).put("msg","点赞失败");
        }
        return JSONResult.success();
    }

    /**
     * 获取全部
     * @return
     */
    @RequestMapping(value = "/all",method = RequestMethod.GET)
    public JSONResult all(){
        return JSONResult.success().put("data",videoRepository.findAll());
    }

    /**
     *  投稿添加
     * @return
     */
    @RequestMapping(value = "/add",method = RequestMethod.POST)
    public JSONResult add(String title, String briefIntroduction, String duration,
                          String coverUrl, String url, Long videoCatId, String username){
        Video video = new Video(title,briefIntroduction,duration,coverUrl,url);
        VideoCat videoCat = videoCatRepository.getOne(videoCatId);
        User user = userRepository.getByUsername(username);
        video.setNickname(user.getNickname());
        video.setVideoCatId(videoCat.getId());
        if(videoRepository.save(video) == null){
            return JSONResult.success(StatusCode.ERROR).put("msg","投稿失败");
        }
        return JSONResult.success();
    }

}
