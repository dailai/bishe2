import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Img.css';

//显示单个图片,所有分类的图片都使用这个显示
class Img extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="img-li">
        <Link className="fun-img" to={"/imgview/"+this.props.id}>
          <img alt="肥宅做错了什么要这么对他" 
                src={this.props.path}/>
                {/* src={require("../../static/fun.jpg")}/> */}
          <span className="img-ti">{this.props.title}</span>
          <span className="num">{this.props.imgNum}p</span>
        </Link>
        <div className="info">
          {/* <span className="cat">表情包</span> */}
          <span className="good">
            <i className="dianzan-icon"></i>
            {this.props.goodNum}
          </span>
        </div> 
      </div>
    );
  }
}

export default Img;

//  this.props.goodnum  点赞数量   
//  this.props.imgLinks  图片链接
//  this.props.tit       标题
//  this.props.imgnum   图片数量 
