import React, { Component } from 'react';
import './index.css';
import Video from './Video';
import Page from '../Page';
import Ajax from '../../Ajax';

class VideoSort extends Component {

    constructor(props){
        super(props);
        this.state = {
            timeOrHeat: true,       //true表示时间顺序，false表示热度顺序

            list:[],                //保存列表
            current:1,
            totalPages:0,
            totalElements:0,
            id:{},
        }
    }

    componentDidMount(){
        const { timeOrHeat } = this.state;
        if(timeOrHeat){
            this.timeSort();
        }else{
            this.heatSort();
        }
    }
    //请求时间排序接口
    async timeSort(page=0,size=16){
        const { catId } = this.props;
        let url = "/video/ts?catId="+catId+"&page="+page+"&size="+size;
        let res = await Ajax.get(url);

        if( res.status === 'ok' && res.code === 200){
            this.setState({
                list: res.data.data.content,
                current: res.data.data.number+1,
                totalPages: res.data.data.totalPages,
                totalElements: res.data.data.totalElements,
                id: catId
            })
        }
    }
    //请求热度排序接口
    async heatSort(page=0,size=16){
        const { catId } = this.props;
        let url = "/video/hs?catId="+catId+"&page="+page+"&size="+size;
        let res = await Ajax.get(url);
        if( res.status === 'ok' && res.code === 200){
            this.setState({
                list: res.data.data.content,
                current: res.data.data.number+1,
                totalPages: res.data.data.totalPages,
                totalElements: res.data.data.totalElements,
                id: catId
            })
        }
    }

    // 处理两种排序点击事件
    handleSortOnClick(){
        const { timeOrHeat } = this.state;
        if(!timeOrHeat){
            this.timeSort();
        }else{
            this.heatSort();
        }
        this.setState({
            timeOrHeat: !timeOrHeat,
        })
    }

    //处理分页点击
    handlePageOnclick(index){
        const { timeOrHeat } = this.state;
        if(timeOrHeat){
            this.timeSort(index-1);
        }else{
            this.heatSort(index-1);
        }
    }
    //处理分页跳转
    handleSkip(index){
        const { timeOrHeat, totalPages } = this.state;
        if( index <= totalPages){
            if(timeOrHeat){
                this.timeSort(index-1);
            }else{
                this.heatSort(index-1);
            }
        }
        
    }

    render() {
        const { catId } = this.props;
        const { timeOrHeat, list, current, totalPages, totalElements, id } = this.state;
        if (catId !== id){
            if(timeOrHeat){
                this.timeSort();
            }else{
                this.heatSort();
            }
        }

        const videoList = list == []?[]:list.map((video) =>(
            <Video key={video.id}
            title={video.title}
            briefIntroduction={video.briefIntroduction}
            duration={video.duration}
            playNum={video.playNum}
            goodNum={video.goodNum}
            coverUrl={video.coverUrl}
            nickname={video.nickname}
            id={video.id}/>
        ))

        return (
            <div id="videolist_box" className="video-list">
                <div className="vl-hd clearfix">
                    <div className="left">
                        <ul className="order-tab-list">
                            <li className={ timeOrHeat ? "on":""} onClick={this.handleSortOnClick.bind(this)}>按时间排序</li>
                            <li className={ timeOrHeat ? "":"on"} onClick={this.handleSortOnClick.bind(this)}>按热度排序</li>
                        </ul>
                    </div>
                </div>
                <div className="vd-list-cnt">
                    <ul className="vd-list">
                        {videoList}
                    </ul>
                    <Page current={current}
                    totalElements={totalElements}
                    totalPages={totalPages}
                    handleOnClick={this.handlePageOnclick.bind(this)}
                    handleSkip={this.handleSkip.bind(this)}
                    />
                </div>
            </div>
        );
    }
}


export default VideoSort;