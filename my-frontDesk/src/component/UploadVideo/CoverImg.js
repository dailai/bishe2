import { Upload, Icon, message } from 'antd';
import React, { Component } from 'react';
import './CoverImg.css';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJPG = (file.type === 'image/jpeg' || file.type==='image/png');
  if (!isJPG) {
    message.error('只能上传jpg，png格式图片!');
  }
  const isLt2M = file.size / 1024 / 1024 < 5;
  if (!isLt2M) {
    message.error('图像必须小于2MB!');
  }
  return isJPG && isLt2M;
}

class CoverImg extends Component {
  state = {
    loading: false,
  };

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false,
      }));
      this.props.handleImgChange(info.file.response);     //向父组件传递响应参数
    }
    
  }

  render() {
    const uploadButton = (
      <div>
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div className="ant-upload-text">上传封面</div>
      </div>
    );
    const imageUrl = this.state.imageUrl;
    return (
      <Upload
        name="file"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="/upload/up"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} width="160px" height="100px" alt="avatar" /> : uploadButton}
      </Upload>
    );
  }
}


export default CoverImg;
