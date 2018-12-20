import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Video from './Video';
import Ajax from '../../Ajax';

class NewsetDynamicVideo extends Component {

    state = {
        data: [],
    }


    componentDidMount(){
        this.get()
    }

    async get(){
        const { catId } = this.props;
        let res = await Ajax.get("/video/ts?catId="+catId+"&page=0+&size=12");//这个显示的是最新动态，按时间排序，跟其它共用接口
        // console.log(JSON.stringify(res.data.data.content))
        if( res.status === 'ok' && res.code === 200){
            console.log("ssss")
            this.setState({
                data:res.data.data.content,
            })
        }
    }

    render() {
        const { title, titleIconX, titleIconY, catId, } = this.props;
        const { data } = this.state;
        console.log(titleIconX)
        const titleIcon = titleIconX === undefined ? (<i></i>):(
            <i className="icon icon-bg icon-t" style={{backgroundPositionX:titleIconX,backgroundPositionY:titleIconY}}></i>
        )

        const videos = data === undefined ? [] :data.map((video)=>(
            <Video key={video.id}
                coverUrl={video.coverUrl}
                duration={video.duration}
                title={video.title}
                playNum={video.playNum}
                goodNum={video.goodNum}
                id={video.id}
            />
        ))

        return (
        <div className="new-dynamic-moudel">
            <div className="zone-title">
                <div className="headline clearfix">
                    {titleIcon}
                    <Link to={"/video/"+catId} className="name">{title}</Link>
                    <div className="bili-tab">
                        <div className="bili-tab-item on">
                            最新动态
                        </div>
                    </div>

                    <Link to={"/video/"+catId} className="link-more">
                            
                            更多 
                        <i className="icon"></i>
                    </Link>
                </div>
            </div>
            <div className="storey-box clearfix">
                {videos}
            </div>
        </div>
        );
    }
}



export default NewsetDynamicVideo;