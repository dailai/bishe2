import React, { Component } from 'react';
import { message } from 'antd';
import './index.css';
import Ajax from '../../Ajax';



class ImgView extends Component {

  constructor(props){
    super(props);
    this.state={
      isGood:false,
      
      imgList:[{title:''}],         //图片列表
      date:'',              //时间
      imgNum:0,             //数量
      currentIndex:0,       //当前图片索引
      gatherGoodNum:0,      //集合点赞数量
    }
  }

  componentWillMount(){
    // console.log("id："+this.props.match.params.id);
    const { id } = this.props.match.params;
    this.getImg(id);
  }

  componentDidMount(){
    
    // this.getImg(id);
  }

  //获取图集数据
  async getImg(id){
    let res = await Ajax.get('/imggather/get?id='+id);
    if(res.status === 200){
      this.setState({
        imgList:res.data.imgs,
        date:res.data.createTime,
        imgNum:res.data.imgNum,
        gatherGoodNum:res.data.goodNum,
      })
    }else{
      message.error("网络发送错误");
    }
  }

  //点赞
  async good(imgId,imgGoodNum){
    const { id } = this.props.match.params;
    const { gatherGoodNum, imgList, currentIndex } = this.state;
    let formData = new FormData();
    formData.append('id',id);
    formData.append('gatherGoodNum',gatherGoodNum);
    formData.append('imgId',imgId);
    formData.append('imgGoodNum',imgGoodNum);
    let res = await Ajax.post('/imggather/good',formData);
    if(res.status === 200){
      let newImgList = imgList;
      newImgList[currentIndex].goodNum++;
      this.setState({
        imgList:newImgList,
        gatherGoodNum:gatherGoodNum+1,
      })
    }else{
      message.error("错误："+res.msg);
    }
  }

  handleUp(){
    const { currentIndex } = this.state;
    if( currentIndex == 0){    //第一张图片
      return ;
    }
    this.setState({
      currentIndex:currentIndex-1,
    })
  }

  handleDown(){
    const { currentIndex, imgNum } = this.state;
    if( currentIndex == imgNum - 1){    //最后一张图片
      return ;
    }
    this.setState({
      currentIndex:currentIndex+1,
    })
  }

  render() {
    const { imgList, date, imgNum, currentIndex } = this.state;
    
    // const title = imgList == []?[]:(
    //   <h2 className="iv-tt">{imgList[0].title+'('+currentIndex+'/'+imgNum+')'}</h2>
    // )

    const img = (

      <div className="pic-show">
        <div className="pa-pic" style={{width:imgList[currentIndex].width,height:imgList[currentIndex].height}}>
            <img src={imgList[currentIndex].path}></img>
        </div>
        {img}
        <span className="pic-prev" onClick={this.handleDown.bind(this)}
            style={{height:imgList[currentIndex].height,"lineHeight":imgList[currentIndex].height}}>
          下一张
        </span>
        <span className="pic-next" onClick={this.handleUp.bind(this)}
              style={{height:imgList[currentIndex].height,"lineHeight":imgList[currentIndex].height}}>
          上一张
        </span>
      </div>
    )

    const good = (

      <div className="dz-if">
        <i onClick={this.good.bind(this,imgList[currentIndex].id,imgList[currentIndex].goodNum)}></i>
        <span className="dz-num">{imgList[currentIndex].goodNum}</span>
      </div>
    )

    return (
      <div className="home-middle-content">
      {/* 标题 */}
        <div className="iv-title-con">
          <h2 className="iv-tt">{imgList[currentIndex].title+'('+(currentIndex+1)+'/'+imgNum+')'}</h2>
        </div>
        {/* 时间等信息 */}
        <div className="info-o">
          <span>{date}</span>
        </div>
        {/* 图片显示区域 */}
        <div className="pic-show-area">
          

            {img}
        </div>
        {/* 点赞信息 */}
        <div className="info-t">
          <div className="if-t">
            {good}
          </div>
        </div>
        {/* 类似一种轮播效果，不过是手动轮播-------------------------
        <div className="more-iv">
          <div className="m-i-pa">
            <div className="pi-lh">
              <a className="prev-pic" href="#">上一页</a>
              <a className="next-pic" href="#">下一页</a>
              <div className="pic-list">
                <ul className="cf">
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        {/* 又是一种图片推荐模块，改换标题 */}
        <div className="rec2">
          <div>
            {/* <RecoImg/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ImgView;