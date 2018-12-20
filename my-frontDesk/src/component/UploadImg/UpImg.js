import React, { Component } from 'react';
import { Upload, Icon, message ,Select,Input,Button } from 'antd';
import './UpImg.css';
import Ajax from '../../Ajax';
import PicturesWall from './PicturesWall.js';

const Option = Select.Option;

class UpImg extends Component {

  constructor(props){
    super(props);
    this.state={
      catList:[],           //分类列表
      fileList:[],          //文件列表
      title:'',             //标题
      imgNum:0,             //图片数量
      imgCatId:0,           //分类id
      imgIdList:[],         //图片id列表，图片是先保存，这时数据库图片信息还没有和图片集联系
                            //username
    }
  }

  async componentDidMount(){
    // console.log("componentDidMount");
    let res = await Ajax.get("/imgcat/all");
    if(res.status === 200){
        this.setState({
            catList:res.data,
        })
        
    }else{
        message.error("网络发生错误");
    }
  }



  //处理分类选择
  handleSelectCat(value) {
    // console.log(`分类选择了：`+value);
    this.setState({
      imgCatId:value
    })
  }

  //处理子组件的图片上传，PicturesWall上传后将返回的图片数据库信息保存在这里
  //现在只保存图片id
  //fileList 文件列表，上传成功后需要重新为空
  handleUploadImg(imgId,fileList){
    console.log("handleUploadImg fileList length:"+fileList.length);
    const {imgIdList} = this.state;
    const imgNum = imgIdList.push(imgId);//push返回数组新长度
    this.setState({
      imgIdList:imgIdList,
      imgNum: imgNum,
      fileList:fileList,
    })
  }

  //处理提交按钮
  async handleAllUpload(){
    const {title,imgNum,imgCatId,imgIdList} = this.state;
    let user ={
      id: 1,
      username: '123',
      nickname: '123',
    }
    if(imgNum < 1){
      message.error("没有上传任何图片，不能投稿");
      return ;
    }
    if(imgCatId == 0){
      message.error("还没有选择分类");
      return ;
    }
    if(title == ""){
      message.error("请打上标题");
      return ;
    }
    let formData = new FormData();
    formData.append("title",title);
    formData.append("imgNum",imgNum);
    formData.append("imgCatId",imgCatId);
    formData.append("imgIdList",imgIdList);
    formData.append("username",user.username);
    let res = await Ajax.post("/imggather/add",formData);
    if(res.status === 200){           
      message.success("投稿成功");
      this.setState({                     //回复原样
        title:'',             
        imgNum:0,         
        imgIdList:[],
        fileList:[],        
      })
    }else{
        message.error("投稿失败："+res.msg);
    }
  }

  //处理输入标题
  handleTitle(e){
    this.setState({
      title: e.target.value,
    })
  }
    
  render() {
    const {catList,fileList} = this.state;

    //分类列表
    const option=catList == []?[]:catList.map((result) =>{
      return(
          <Option key={result.id} value={result.id}>{result.catName}</Option>
      )
    });

    return (
        <div className="up-img">
          <div>
            <Input placeholder="图集标题" onChange={this.handleTitle.bind(this)}/>
            <Select defaultValue="0" style={{ width: 120 }} onChange={this.handleSelectCat.bind(this)}>
              <Option value="0">选择分类</Option>
              {option}
            </Select>
          </div>
           {/* 提交按钮 */}
          <Button type="primary" onClick={this.handleAllUpload.bind(this)}>提交</Button>
          <div>
            <PicturesWall handleUploadImg={this.handleUploadImg.bind(this)} fileList={fileList} />
          </div>
        </div>
    );
  }

}


export default UpImg;


