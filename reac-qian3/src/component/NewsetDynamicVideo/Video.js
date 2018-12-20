import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Video.css';

// 视频小组件2
class Video extends Component {



  render() {
    const { coverUrl, duration, title, playNum, goodNum, id } = this.props;

    return (
      <div className="common-moudle md-list">
        <Link to={"/view/"+id}>
          <div className="pic">
            <div className="lazy-img">
              <img alt="5555" src={coverUrl} alt="" width="160px" height="100px"/>
            </div>
            <div className="mask-video"></div>
            <span className="duration">{duration}</span>
          </div>
          <p className="t">{title}</p>
          <div className="num">
            <span className="play">播放：{playNum}</span>
            <span className="good">点赞：{goodNum}</span>
          </div>
          </Link>
      </div>
    );
  }
}

export default Video;
