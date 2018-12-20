import React, { Component} from 'react';
import './PicturesWall.js';
import { Upload, Icon, Modal } from 'antd';
class PicturesWall extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    fileList: [],
  };

  handleCancel = () => {
    this.setState({ previewVisible: false })
  }

  handlePreview = (file) => {
    console.log("handlePreview");
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  }

  //发现这是一种奇怪的写法，这样也是在写一个函数，但是在下面使用的时候不用bind(this)也能在里面用this
  handleChange = (info) => {
    console.log("info.fileList length"+info.fileList.length);
    this.setState({ fileList:info.fileList })
    if(info.file.status === 'done'){
      if(info.file.response.status === 200){    //我的200
        console.info(JSON.stringify(info.file.response));
        this.props.handleUploadImg(info.file.response.data.id,info.fileList);
      }
    }
  }

  customRequest(option){

  }

  render() {
    // const { fileList } = this.props;
    // console.log("fileList length："+fileList.length);
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传图集</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          name="file"
          action="/img/add"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 30 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;