# react+springboot《视频网站》

## 目录结构(详细的说明在各个项目文件下的README.md)
1. javabishe是包含了前台后台的java代码
    * admin是后台项目
    * core是核心项目
    * front-desk是前台项目
2. my-admin是后台界面
3. my-frontDesk是前台界面

## 实现功能
* 前台
    * 登陆
    * 注册
    * 分类显示视频
    * 视频播放
    * 视频上传
* 后台
    * 登陆，验证
    * 用户查看，冻结
    * 视频查看
    * 前台头部图片查看，上传
    * 管理员
        * 后台人员查看，删除，新增
        * 角色查看，删除，新增

## 项目内容主要描述
在各个项目的README.md查看

## BUG
1. 上传视频  
    描述：前端上传视频到后端，后端在上传到阿里云OSS，后端上传视频时间需要很久，前端报错500。
2.   
    描述：前后端java项目获取不到core项目里面实体类的父类属性，如getId()就会报错

## 运行
1.  admin项目  
    访问http://localhost:8089/
2.  front-desk项目  
    访问http://localhost:8080/
3.  my-admin项目  
    下载依赖  
    `npm install`  
    运行  
    `npm start`    
4.  my-frontDesk项目  
    下载依赖  
    `npm install`    
    运行  
    `npm start`    








