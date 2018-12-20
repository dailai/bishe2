import React, { Component } from 'react';
import './RecommendImg.css';
import Img from './Img.js';

class RecoImg extends Component {

  constructor(props){
    super(props);
  }

  render() {
    
    return (
      <div className="funny-module">      {/* 1行6个的推荐模块，用于图片推荐*/}

        {/* 标题 */}
        <div className="tit">
          <em><img src={require('../../../static/duanzi.jpg')}/><a href="#">段子</a></em>
          <span><a href="#">更多<i className="gen-duo-icon"></i></a></span>
        </div>

        {/* 图片 */}
        <div className="row">
          <ul className="fun-list">
            <Img/>
            <Img/>
            <Img/>
            <Img/>
            <Img/>
            <Img/>
          </ul>
        </div>

      </div>
    );
  }
}

export default RecoImg;