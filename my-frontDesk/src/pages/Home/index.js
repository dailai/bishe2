import React, { Component } from 'react';
import { Carousel } from "antd";
import './index.css';
import NewsetFilterVideo from '../../component/NewsetFilterVideo';
import NewsetDynamicVideo from '../../component/NewsetDynamicVideo';
import Top from '../../component/Top';
import Header from '../../component/Header';

class Home extends Component {

    

    render(){
        
        return(
            <React.Fragment>
                <Top/>
                <Header/>
                <div className="vi-home-con">
                {/* <NavClassify tit="快速导航" navList={navList}/> */}
                <div className="videoh-wrapper">
                {/* 有轮播的推荐 */}
                <div className="chief-recommend">
                    <div className="ch-r-lbo">
                    <Carousel autoplay>
                        <div><img src={require("../../static/videolb1.jpg")} alt=""></img></div>
                        <div><img src={require("../../static/videolb2.jpg")} alt=""></img></div>
                        <div><img src={require("../../static/videolb3.jpg")} alt=""></img></div>
                    </Carousel>
                    </div>
                    <div className="ch-r-vi">
                    <NewsetFilterVideo />
                    </div>
                </div>
                <div className="label-recommend">
                    <div className="vh-label-video">
                    <NewsetDynamicVideo 
                        catId={1}
                        title={"动画"}
                        titleIconX={"-141px"}
                        titleIconY={"-908px"}/>
                    <NewsetDynamicVideo 
                        catId={2}
                        title={"游戏"}
                        titleIconX={"-141px"}
                        titleIconY={"-203px"}/>
                    <NewsetDynamicVideo 
                        catId={3}
                        title={"国创"}
                        titleIconX={"-140px"}
                        titleIconY={"-1611px"}/>
                    <NewsetDynamicVideo 
                        catId={4}
                        title={"音乐"}
                        titleIconX={"-140px"}
                        titleIconY={"-1611px"}/>
                    <NewsetDynamicVideo 
                        catId={5}
                        title={"舞蹈"}
                        titleIconX={"-141px"}
                        titleIconY={"-461px"}/>
                    </div>
                </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}

export default Home;