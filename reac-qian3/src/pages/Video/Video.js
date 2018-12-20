import React, { PureComponent } from 'react';
import './Video.css';
import VideoSort from '../../component/VideoSort';
import Header from '../../component/Header';
import Top from '../../component/Top';

class Video extends PureComponent {



  componentDidMount(){

  }


  render() {
    const { id } = this.props.match.params;

    return (
        <React.Fragment>
            <Top />
            <Header />
            <div className="vi-home-con">
                <div>
                    <div className="l-con">
                        <VideoSort catId={id}/>
                    </div>
                </div>
            </div>
      </React.Fragment>
    );
  }
}


export default Video;