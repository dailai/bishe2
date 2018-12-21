# react+springboot《视频网站》 （未完成）

## 介绍下目录解构(详细的说明在各个项目文件下的README.md)
1. javabishe是包含了前台后台的java代码
    * admin是后台项目
    * core是核心项目
    * front-desk是前台项目
2. my-admin是后台界面
3. my-frontDesk是前台界面

## 运行项目(java 1.8)
1. admin项目  
    maven自动引用jar即可开启 http://localhost:8089/
2. front-desk项目  
    maven自动引用jar即可开启 http://localhost:8080/
3. core项目  
    包含了实体类，dao层，service层等，被依赖。
4. my-admin项目  
    使用了蚂蚁金服的ant-design-pro，此外没有添加额外的模块 
    下载依赖  
    `npm install`  
    运行  
    `npm start`    
5. my-frontDesk项目  
    create-react-app搭建的项目  
    添加的依赖模块：axios,jquery,antd,redux,react-router-dom,video-react
    下载依赖  
    `npm install`    
    运行  
    `npm start`    






