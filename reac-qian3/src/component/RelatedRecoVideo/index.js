import React, { Component } from 'react';
import './index.css';
import Video from './Video';

class RelatedRecommend extends Component {


  componentDidMount(){
  }

  render() {
    return (
      <div id="related-rec" className="related-rec-moudle">
        <div className="rec-title">
            相关视频推荐
        </div>
        <div className="rec-list">
            <Video />
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
      </div>
    );
  }
}

export default RelatedRecommend;