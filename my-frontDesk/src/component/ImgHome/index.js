import React, { Component } from 'react';
import { message } from 'antd';
import './index.css';
import Img from './Img';
import Page from '../Page';
import Selectable from './Selectable';
import Ajax from '../../Ajax';

class ImgHome extends Component {

  constructor(props){
    super(props);
    this.state={
      catId:0,          //为了让分页列表不使用这个属性就可以通用了
      list:[],          //数据列表

      current:1,          //当前页
      totalPages:0,       //共多少页
      totalElements:0,
    }
  }

  componentDidMount(){
    this.get();
  }

  async catGet(id,page=0,size=1){
    let res = await Ajax.get('/imggather/catget?catId='+id+"&page="+page+"&size="+size);
    if(res.status === 200){
      this.setState({
        list: res.data.content,
        totalPages:res.data.totalPages,
        catId: id,
        current:res.data.number+1,
        totalElements:res.data.totalElements,
      })
    }else{
      message.error("网络发送错误");
    }
  }

  //分类选择的
  async get(page=0,size=1){
    const { catId } = this.state;
    let res = await Ajax.get('/imggather/catget?catId='+catId+"&page="+page+"&size="+size);
    if(res.status === 200){
      this.setState({
        list: res.data.content,
        totalPages:res.data.totalPages,
        current:res.data.number+1,
        totalElements:res.data.totalElements,
      })
    }else{
      message.error("网络发送错误");
    }
  }

  //处理分页点击
  handlePageOnclick(index){
    this.get(index-1);
  }

  //处理分页跳转
  handlePageSkip(index){
    this.get(index-1)
  }

  render() {
    const { list,current,totalPages,pageSize } = this.state;
    console.log(current);
    const imgs = list == [] ? []:list.map((value) =>{
      return(
        <Img 
        id={value.id}
        key={value.id} 
        imgNum={value.imgNum}
        goodNum={value.goodNum}
        title={value.imgs[0].title}
        path={value.imgs[0].path} />
      )
    })
    
    return (
      <div className="home-middle-content">

        <Selectable getImgGather={this.catGet.bind(this)}/>

          {/* 图片显示 */}
        <div className="ic-content">
          {imgs}
        </div>
        <Page 
          current={current} 
          totalPages={totalPages} 
          pageSize={pageSize}
          handleOnClick={this.handlePageOnclick.bind(this)}
          handleSkip={this.handlePageSkip.bind(this)}
          />
      </div>
    );
  }
}

export default ImgHome;