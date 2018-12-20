import React, { PureComponent } from 'react';
import './View.css';
import { Link } from 'react-router-dom';
// video-react 播放组件
import '../../../node_modules/video-react/dist/video-react.css';
import { Player } from 'video-react';
import Ajax from '../../Ajax';
import RelatedRecoVideo from '../../component/RelatedRecoVideo';
import Top from '../../component/Top';

class View extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      video:{},
    }
  }

  componentDidMount(){
    this.get();
  }

  async get(){
    const { id } = this.props.match.params;
    let res = await Ajax.get("/video/play?id="+id);
    if( res.status === 'ok'){
      this.setState({
        video: res.data.video,
      })
    }
  }

  render() {
    const { video } = this.state;

    const player = video.url?(
      <Player> 
        {/* <source src="https://luo20181213.oss-cn-shenzhen.aliyuncs.com/2018-12-18/e88b573a748e40c4924b039645b82389.mp4"/>  */}
        <source src={video.url} />
      </Player>
    ):[]
    return (
      <React.Fragment>
        <Top />
        <div className="vv-wrap">
          <div className="vv-l-con">
            <div className="v-con">
              <div id="play-con">
                {player}
              </div>
              <div id="view-info" className="video-view">
                <h1 title={video.title} className="video-title">{video.title}</h1>
                <div className="video-data">
                  <span title={video.playNum} className="play">播放:{video.playNum}</span>
                  <time>{video.createTime}</time>
                  <span className="a-rank">
                    <Link to={"/vc/"+video.videoCatId} >动画</Link>
                  </span>
                </div>
              
              </div>
            </div>
          </div>
          <div className="vv-r-con">
            <RelatedRecoVideo/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default View;