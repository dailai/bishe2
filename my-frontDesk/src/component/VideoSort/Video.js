import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Video.css';

class Video extends Component {


  componentDidMount(){

  }

  render() {
    const { title, briefIntroduction, duration, playNum, goodNum, coverUrl, nickname, id} = this.props;

    return (
        <li className="l-item-li">
            <div className="l-item">
                <div className="l">
                    <div className="common-moudle">
                        <Link to={"/view/"+id}>
                            <div className="pic">
                            <div className="lazy-img">
                                <img alt="5555" src={coverUrl} width="160px" height="100px"/>
                            </div>
                            <div className="mask-video"></div>
                            <span className="duration">{duration}</span>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="r">
                    <Link to={"/view/"+id} title={title} className="title">{title}</Link>
                    <div className="v-desc">{briefIntroduction}</div>
                    <div className="v-info">
                        <span className="v-info-i">
                            <i></i>
                            <span>播放:{playNum}</span>
                        </span>
                        <span className="v-info-i">
                            <i></i>
                            <span>点赞:{goodNum}</span>
                        </span>
                    </div>
                    <div className="up-info">
                        <Link to="" title={nickname} className="v-author">{nickname}</Link>
                    </div>
                </div>
            </div>    
        </li>
    );
  }
}


export default Video;