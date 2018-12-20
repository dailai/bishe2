import React, { Component } from 'react';
import { Upload, Icon, message ,Select, Input, Form, Button } from 'antd';
import { connect } from 'react-redux';
import './index.css';
import Ajax from '../../Ajax';
import axios from 'axios';
import CoverImg from './CoverImg';

const Dragger = Upload.Dragger;
const Option = Select.Option;
const { TextArea } = Input;
const FormItem = Form.Item;


class UploadVideo extends Component {

    constructor(props){
        super(props);
        this.state={
            list:[],                        // 分类列表
            isUpload: false,                 // 是否上传视频
            isUploadImg:false,              // 是否上传封面

            url:'',                        // 频访问路径
            coverUrl:'',                    // 封面访问路径
            catId:0,                        // 视频分类
            title:'',                       // 标题
            briefIntroduction:'',           // 简介
            duration: '',                   // 时长
        }
        this.getVideoDuration = this.getVideoDuration.bind(this);
    }

    loadedmetadata = () =>{
        const { duration } = this.state;

    }

    componentDidMount(){
        console.log(JSON.stringify(this.props.user))
    }

    //获取视频时长
    getVideoDuration = (file) => {
        // console.log("开始获取视频时长")
        var video = document.createElement('Video');
        video.addEventListener('loadedmetadata', function loadedmetadata() {
            setTimeout(() => {
                // console.log("视频时长"+video.duration);         //可以获取视频时长---》视频时长6.269388秒
                let minutes = Math.round(video.duration / 60); 
                let seconds = Math.round(video.duration % 60); 
                if(minutes < 10){
                    minutes = '0'+minutes;
                }
                if(seconds < 10){
                    seconds = '0'+seconds;
                }
                
                var durationInput = document.getElementById("duration");        //这里this不是UpVideo，所以只能这样吧
                durationInput.value = minutes+':'+seconds;

                console.log("获取视频文件时长："+minutes+':'+seconds)
            },300);
        }, false);
        video.src = URL.createObjectURL(file);
    }


    // //处理视频上传后
    // handleUploadVideoChange(info){
    //     const status = info.file.status;
    //     console.log(info);
    //     if (status !== 'uploading') {
    //         console.log(info.file, info.fileList);
    //     }
    //     if (status === 'done') {
    //         message.success(`视频上传成功!`);
    //         this.setState({
    //             isUpload: true,
    //         })
    //     } else if (status === 'error') {
    //         message.error(`视频上传失败.`);
    //     }
    // }

    //处理图片上传后
    handleImgChange(result,event){
        console.log("图片上传成功,url："+result.data.url);
        message.success("封面上传成功");
        this.setState({
            coverUrl:result.data.url,
            isUploadImg: true,
        })
    }

    customRequest = ({
        action,
        data,
        file,
        filename,
        headers,
        onError,
        onProgress,
        onSuccess,
        withCredentials,
        }) => {
        // EXAMPLE: post form-data with 'axios'
        const formData = new FormData();
        if (data) {
            Object.keys(data).map(key => {
            formData.append(key, data[key]);
            });
        }
        formData.append(filename, file);
        
        const res = axios.post(action, formData, {
            withCredentials,
            headers,
            onUploadProgress: ({ total, loaded }) => {
                onProgress({ percent: Math.round(loaded / total * 100).toFixed(2) }, file);
                },
        })
        .then(({ data: response }) => {
                onSuccess(response, file);
                // console.log("上传响应："+JSON.stringify(res))
                this.getVideoDuration(file);
                this.setState({
                    isUpload: true,
                    url:response.data.url,
                })
                console.log("上传响应："+JSON.stringify(response))
        })
        .catch(onError);
        return {
            abort() {
            console.log('upload progress is aborted.');
            },
        };
    }

    // 还没上传视频文件，只渲染出上传视频的组件
    renderUploadVideo(){
        const props = {
            action: '/upload/up',
            multiple: false,
            data: { a: 1, b: 2 },
            headers: {
              Authorization: '$prefix $token',
            },
            onStart(file) {
              console.log('onStart', file, file.name);
            },
            onSuccess(ret, file) {
              console.log('onSuccess', ret, file.name);
            },
            onError(err) {
              console.log('onError', err);
            },
            onProgress({ percent }, file) {
              console.log('onProgress', `${percent}%`, file.name);
            },
            customRequest:this.customRequest,
        };
          

        return(
            <React.Fragment>
                <Dragger {...props} >
                    <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">点击或者拖动视频文件到这区域</p>
                </Dragger>
            </React.Fragment>
        );
    }

    // 提交表单
    handleSubmit = (e) => {
        const { coverUrl, url } = this.state;
        const { user, } = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                return ;
                
            }
            let duration = this.refs.duration.value;
            console.log("投稿人昵称："+user.nickname)
            console.log("提交的表单数据："+JSON.stringify(values))
            console.log("提交的时长："+duration);
            console.log("提交的视频url："+url);
            console.log("typeof:"+typeof(values.videoCatId))
            let formData = new FormData();
            formData.append("duration",duration);
            formData.append("title",values.title);
            formData.append("briefIntroduction",values.briefIntroduction);
            formData.append("coverUrl",coverUrl);
            formData.append("url",url);
            formData.append("videoCatId",values.cat);
            formData.append("username",user.username);
            this.handleSubmitAjax(formData);
        });
    }

    async handleSubmitAjax(formData){
        const res = await Ajax.post('/video/add',formData);
        if(res.status === 'ok' && res.code === 200){
            message.success("投稿成功");
            
        }else{
            message.error("投稿失败："+res.msg);
        }
    }


    // 渲染上传的表格
    renderUploadForm(){
        const { catList, form:{ getFieldDecorator } } = this.props;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        //分类列表
        const option = catList === [] || catList === undefined ? [] : catList.map((result) =>{
            return(
                <Option key={result.id} value={result.id}>{result.name}</Option>
            )
        });
        return(
            <React.Fragment>
                    <input id="duration" type="hidden" ref="duration"/>
                    <Form onSubmit={this.handleSubmit}>
                        <FormItem
                        {...formItemLayout}
                        label="标题"
                        >
                            {getFieldDecorator('title')(
                            <Input placeholder="视频标题" />
                            )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="简介"
                        >
                            {getFieldDecorator('briefIntroduction')(
                            <TextArea placeholder="视频简介" rows={2} />
                            )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="分类"
                        >
                            {getFieldDecorator('cat',{ initialValue:'cat'})(
                            <Select  style={{ width: 120 }}>
                                <Option value="cat">选择分类</Option>
                                {option}
                            </Select>
                            )}
                        </FormItem>
                        <FormItem
                        {...formItemLayout}
                        label="封面"
                        extra='支持jpg，png等图片格式'
                        >
                            <CoverImg handleImgChange={this.handleImgChange.bind(this)} />
                        </FormItem>
                        <FormItem
                        wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="primary" htmlType="submit">提交投稿</Button>
                        </FormItem>
                    </Form>
            </React.Fragment>
        )
    }

    // 渲染上传视频组件
    renderUpload(){
        const { isUpload } = this.state;
        return isUpload ? this.renderUploadForm() : this.renderUploadVideo();
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const { catList, } = this.props;
        //分类列表
        const option = catList === [] || catList === undefined ? [] : catList.map((result) =>{
            return(
                <Option key={result.id} value={result.id}>{result.name}</Option>
            )
        });
        
        const upload = this.renderUpload();

        return(
            <div className="">
                {upload}


                {/* <div className="">
                    <Input placeholder="视频标题" onChange={this.handleTitleChange.bind(this)} />
                    <TextArea placeholder="视频简介" rows={2} onChange={this.handleBriefIntroductionChange.bind(this)} />
                    <Select defaultValue="cat" style={{ width: 120 }} onChange={this.handleSelectCat.bind(this)}>
                        <Option value="cat">选择分类</Option>
                        {option}
                    </Select>
                </div>
                <input id="duration" type="hidden" ref="duration"/> */}
                {/* 提交按钮 */}
                {/* <Button type="primary" onClick={this.handleAllUpload.bind(this)}>提交</Button> */}
                {/* 上传封面 */}
                {/* <div>
                    <CoverImg handleImgChange={this.handleImgChange.bind(this)}/>
                </div> */}
                {/* 视频上传 */}
                {/* <div style={isUploadVideo?{display:"none"}:{display:"block"}}>
                    <Dragger name='file'
                        multiple={false}
                        customRequest={this.VideoRequest.bind(this)}
                        // action="/video/upload"
                        // onChange={this.handleVidoUploadChange.bind(this)}
                        >
                        <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                        </p>
                        <p className="ant-upload-text">点击或者拖动视频文件到这区域</p>
                    </Dragger>
                </div> */}

            </div>
        )
    }
}

const mapStateTopProps = state =>{
    return {
    user:state.user
}}

export default connect(mapStateTopProps,null)(Form.create()(UploadVideo));

