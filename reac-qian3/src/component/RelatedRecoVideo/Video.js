import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Video extends Component {


  componentDidMount(){
  }

  render() {
    const { coverPath, duration, title, playNum, goodNum } = this.props; 
    return (
      <div className="video-page-card">
        <div className="card-box">
          <div className="pic">
            <div className="pic-box">
              <Link to="">
                <img src={require('../../static/59b891f2b6066d34cadfba2fb31d8fbf67ca4c04.jpg')} alt=""/>
              </Link>
              <div className="mask-video"></div>
              <span className="duration">06:23</span>
            </div>
            <div className="info">
              <Link to="" className="title" title="南京最牛皮肚面，老太干到现在55年，南京人都知道，90高龄能翻锅">
                南京最牛皮肚面，老太干到现在55年，南京人都知道，90高龄能翻锅
              </Link>
              <div className="up">
                <Link to=""></Link>
              </div>
              <div className="count">
                1.5万播放&nbsp;·&nbsp;31点赞
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Video;