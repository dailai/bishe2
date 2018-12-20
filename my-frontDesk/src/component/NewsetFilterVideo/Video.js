import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Video.css';

// 视频小组件1
class Video extends Component {



  render() {
    const { title, play, imgSrc, id } = this.props;

    return (
      <div className="groom-moudle home-card">
          <Link to={"/view/"+id} title={title}>
            <img className="pic" src={imgSrc} alt={imgSrc}></img>
            <div className="card-mark">
              <p className="title">{title}</p>
              {/* <p className="up">up主：你妈妈吗</p> */}
              <p className="play">播放:{play}</p>
            </div> 
          </Link>
      </div>
    );
  }
}

export default Video;