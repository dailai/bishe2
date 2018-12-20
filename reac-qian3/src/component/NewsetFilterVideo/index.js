import React, { Component } from 'react';
import './index.css';
import Video from './Video';
import Ajax from '../../Ajax';
class NewsetFilterVideo extends Component {



  state = {
    data: [],
  }


  componentDidMount(){
      this.get()
  }

  async get(){
      let res = await Ajax.get("/video/recomm");
      console.log("NewsetFilterVideo"+JSON.stringify(res))
      if( res.status === 'ok' && res.code === 200){
          console.log("ssss")
          this.setState({
              data:res.data.data.content,
          })
      }
  }

  render() {
    const { data } = this.state;

    const videos = data === undefined ? []:data.map((item) =>(
      <Video key={item.id}
        title={item.title}
        play={item.playNum}
        imgSrc={item.coverPath}
        id={item.id}
      />
    ))

    return (
      <div className="recommend-moudel">
        {videos}
      </div>
    );
  }
}



export default NewsetFilterVideo;