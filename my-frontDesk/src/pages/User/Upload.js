import React, { Component } from 'react';
import { Card } from 'antd';
import './Upload.css';
import UploadVideo from '../../component/UploadVideo';
import Top from '../../component/Top';
import Ajax from '../../Ajax';

class Upload extends Component {


    state = {
        CardState:'投稿视频',

        catList:[],
    }

    onTabChange = (key, type) => {
        this.setState({ [type]: key });
    }

    componentDidMount(){
        this.getCatList();
    }

    async getCatList(){
        let res = await Ajax.get("/vc/list");
        this.setState({
            catList:res.data.list,
        })
    }

    render() {
        const { catList, } = this.state;
        const tabList = [
            {
                key: '投稿视频',
                tab: '投稿视频',
            },
            {
                key: '投稿图片',
                tab: '投稿图片',
            },
        ];

        const contentListNoTitle = {
            投稿图片: <h1>上传图片未开启</h1>,
            投稿视频: <React.Fragment><UploadVideo catList={catList}/></React.Fragment>,
        };

        return (
            <React.Fragment>
                <Top/>
                <div id="up-load-md">
                    <div>
                    <Card
                        style={{ width: '100%',height: '700px'}}
                        tabList={tabList}
                        activeTabKey={this.state.CardState}
                        onTabChange={(key) => { this.onTabChange(key, 'CardState'); }}>
                        {contentListNoTitle[this.state.CardState]}
                    </Card>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Upload;