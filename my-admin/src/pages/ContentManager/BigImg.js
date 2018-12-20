import React, { PureComponent, Fragment } from 'react';
import { 
  Card, 
  Table, 
  Switch, 
  Popconfirm, 
  Divider, 
  Row, 
  Col,
  Icon,
  Form,
  Input,
  Button,
  Upload,
  message,
  Tooltip } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';

import styles from './Video/TableList.less';
import bigimgStyles from './BigImg.less';

const FormItem = Form.Item;

const constFileList = [{
  uid: '-1',
  name: '限制上传一张图片',
  url: '',
  status: 'done',
}]

@connect(({ bigimg, adminUser }) => ({
  data: bigimg.list,
  currentUser: adminUser.currentUser,
}))
@Form.create()
export default class BigImg extends PureComponent {

  state = {
    expandForm: false,
    formValues: {},
    bigImgSrc: '',
    uploadBigImgSrc: '',
    fileList: constFileList,
    formValues: {},
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'bigimg/fetch',
    });
  }

  handleFormReset = () => {
    // const { form, dispatch } = this.props;
    const { dispatch } = this.props;
    // form.resetFields();
    this.setState({
      formValues: {},
    });
    dispatch({
      type: 'video/videos',
      payload: {},
    });
  };

  toggleForm = () => {
    const { expandForm } = this.state;
    this.setState({
      expandForm: !expandForm,
    });
  };

  // 处理上传文件
  handleChange = (info) => {
    const file = info.file;
    let fileList = info.fileList;
    // 
    fileList = fileList.slice(-2);
    
    if (file.status !== 'uploading') {
      console.log( info )
    }
    if (file.status === 'done') {
      if (file.response.status === 'ok'){
        // 返回文件列表中我们刚上传的文件一些信息，其他都不要
        fileList = fileList.filter((item) => {
          if(item.name === file.name ){
            const { url } = item.response.data;
            const { uid, status, name } = item;
            return { uid, status, name, url };
          }
        })
        this.setState({
          uploadBigImgSrc: file.response.data.url,
          bigImgSrc: file.response.data.url,
        })
      }
      message.success(`文件上传成功`);
    } else if (file.status === 'error') {
      message.error(`文件上传失败`);
    }
    

    this.setState({ fileList });
    
  }

  // 重置
  handleFormReset = () => {
    const { form } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
      fileList: constFileList,
    });
  };

  // 处理上传
  handleUpload = e => {
    e.preventDefault();
    const { uploadBigImgSrc } = this.state;
    const { dispatch, form } = this.props;

    form.validateFields((err, fieldsValue) => {
      if (err) return;
      if (uploadBigImgSrc === '') return;
      const values = {
        ...fieldsValue,
        url: uploadBigImgSrc,
      };

      this.setState({
        formValues: values,
      });
      console.log( values )
      dispatch({
        type: 'bigimg/fetchUpload',
        payload: values,
      });
    });
  };

  // 打开上传表格
  renderUploadForm(){
    const { fileList } = this.state;
    const {
      form: { getFieldDecorator },
      currentUser:{ name },
    } = this.props;
    const props = {
      // name: 'file',
      action: '/server/upload/up',
      // headers: {
      //   authorization: 'authorization-text',
      // },
      multiple: true,
      onChange: this.handleChange,
    };
    return (
      <Form onSubmit={this.handleUpload} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
          <Col md={8} sm={24}>
            <FormItem label="操作人名字">
              {getFieldDecorator('name',{initialValue:name}) (
                <Tooltip title="prompt text">
                  <span>{name}</span>
                </Tooltip>
              )}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="图片标题">
              {getFieldDecorator('title')(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="图片实际宽度">
             {getFieldDecorator('width',{initialValue:'1920'})(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
            <FormItem label="图片实际高度">
              {getFieldDecorator('height',{initialValue:'180'})(<Input placeholder="请输入"/>)}
            </FormItem>
          </Col>
          <Col md={8} sm={24}>
          <Upload {...props} fileList={fileList} >
            <Button>
              <Icon type="upload" /> 点击先上传
            </Button>
          </Upload>
          </Col>

          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">
                上传
              </Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>
                重置
              </Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
                收起 <Icon type="down" />
              </a>
            </span>
          </Col>
        </Row>
      </Form>
    );
  }

  // 收缩上传表格
  renderShrinkForm(){
    return (
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={8} sm={24}>
          <span className={styles.submitButtons}>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>
              需要上传图片 <Icon type="down" />
            </a>
          </span>
        </Col>
      </Row>
    );
  }

  // 根据 expandForm 渲染表格
  renderForm(){
    const { expandForm } = this.state;
    return expandForm ? this.renderUploadForm() : this.renderShrinkForm();
  }

  // 渲染出大图片
  renderBigImg(){
    const { bigImgSrc } = this.state;
    return(
      <img alt="" src={bigImgSrc}/>
    );
  }

  // 没有渲染图片的时候出现大字体
  renderBigFont(){
    return(
      <div className={bigimgStyles.hint}>
        点击查看图片
      </div>
    );
  }

  renderImg(){
    const { bigImgSrc } = this.state;
    return bigImgSrc === '' ? this.renderBigFont() : this.renderBigImg();
  }

  checkBigImg(e,key){
    const { data } = this.props;
    let src = '';
    data.filter( item => item.key === key ? src = item.url : '');
    this.setState({
      bigImgSrc: src,
    })
  }

  // 删除
  remove(key) {
    const { dispatch } = this.props;
    const id = key;
    dispatch({
        type: 'bigimg/fetchRemove',
        payload: {id},
    })
  }

  // 改变状态
  handleStatusChange(key){
    const { data, dispatch} = this.props;
    let changeData = {};
    let list = [];
    list = data.filter((item) => {
      if(item.id === key ){
        let status = item.status === 1?0:1;
        const { id } = item;
        changeData = { id, status };
        item.status = status;
        return item;
      }
      item.status = 1;
      return item
    });
    dispatch({
      type: 'bigimg/changeStatus',
      payload: {list, changeData},
    })
  }

  render() {
    const { location, data } = this.props;
    const columns = [{
          title: 'id',
          dataIndex: 'id',
          key: 'id',
          width: '5%',
      }, {
          title: '时间',
          dataIndex: 'createTime',
          key: 'createTime',
          width: '10%',
      },
      {
        title: '操作人名字',
        dataIndex: 'name',
        key: 'name',
        width: '10%',
      },{
          title: '标题',
          dataIndex: 'title',
          key: 'title',
          width: '10%',
      },{
        title: '宽*高',
        key: 'widthandheight',
        width: '10%',
        render: (text,record) => (
          <span>
            {record.width} * {record.height}
          </span>
        )
      },{
        title: '资源路径',
        dataIndex: 'url',
        key: 'url',
        width: '30%',
      },{
          title:'状态',
          dataIndex:'status',
          key:'status',
          render: (status,record) =>(
              <span>
                  <Switch 
                  checkedChildren="显示" 
                  unCheckedChildren="关闭" 
                  checked={status===0?true:false} 
                  onChange={()=>this.handleStatusChange(record.key)}/>
              </span>
          )
      },{
      title: '操作',
      key: 'action',
      render: (text, record) => (
          <span>
          <Popconfirm title="是否删除此用户" onConfirm={() => this.remove(record.key)}>
              <a>删除</a>
          </Popconfirm>
          <Divider type="vertical" />
            <a onClick={(e)=>this.checkBigImg(e,record.key)}>查看图片</a>
          </span>
      ),
    }];
    return (
      <PageHeaderWrapper
         title='大图片'
        tabActiveKey={location.pathname}
        content='该大图片用于前台头部展示，只有一个能显示其他必须禁止，规定上传1920*180尺寸。'
      >
        <Card bordered={false}>
          <div className={bigimgStyles.bigImg}>
            {this.renderImg()}
          </div>
          <Divider type="horizontal" />
          <div className={styles.tableList}>
            <div className={styles.tableListForm}>{this.renderForm()}</div>
          </div>
          <Divider type="horizontal" />
          <Table columns={columns} dataSource={data} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}