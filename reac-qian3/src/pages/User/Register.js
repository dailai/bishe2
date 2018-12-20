import React, { Component } from 'react';
import {message, 
    Form, 
    Input, 
    Tooltip, 
    Icon, 
    Cascader, 
    Select, 
    Row, 
    Col, 
    Checkbox,
    Button, 
    AutoComplete,
     } from 'antd';
import './Register.css';
import Ajax from '../../Ajax';
import { Redirect } from 'react-router-dom';
import Top from '../../component/Top';

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class Register extends Component {

    state = {
        confirmDirty: false,
    };


    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('输入的两个密码不一致!');
        } else {
          callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('注册表格数据: ', values);
                let formData = new FormData();
                formData.append('username',values.username);
                formData.append('password',values.password);
                formData.append('nickname',values.nickname);
                this.handleSubmitAjax(formData);
            }
        });
    }

    async handleSubmitAjax(formData) {
        const res = await Ajax.post('/user/register',formData);
        console.log(res)
        if(res.code === 200 || res.status === 'ok'){
            message.success('注册成功,即将跳转到登陆页面！');
            setTimeout(() =>{
                this.props.history.push('/login');  //跳转
            },1000);
        }
    }

    handleUsername = (rule, value, callback ) => {
        if( value === '' ){
            callback('');
        }
        if((value.length < 9 ) || (value.length > 20)){
            callback('用户名必须在16-20位之间');
        }
        if( this.check_other_char(value)){
            callback('不能含有特殊字符')
        }
        callback(); 
    }

    // 验证用户名是否含有特殊字符
    check_other_char = (str) =>{
        var arr = ["&", "\\", "/", "*", ">", "<", "@", "!"];
        for (var i = 0; i < arr.length; i++)
        {
            for (var j = 0; j < str.length; j++)
            {
                if (arr[i] == str.charAt(j))
                {
                    return true;
                }
            }
        }   
        return false;
    }


    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
        };
        const tailFormItemLayout = {
        wrapperCol: {
            xs: {
            span: 24,
            offset: 0,
            },
            sm: {
            span: 16,
            offset: 8,
            },
        },
        };

        return (
            <React.Fragment>
                <Top/>
                <div id="regist-app">
                    <div className="regist-area">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem
                                {...formItemLayout}
                                label="用户名"
                                >
                                {getFieldDecorator('username', {
                                    rules: [{
                                    required: true, message: '请输入用户名!',
                                    }, {
                                    validator: this.handleUsername,
                                    }],
                                })(
                                    <Input type="username" />
                                )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="密码"
                            >
                            {getFieldDecorator('password', {
                                rules: [{
                                required: true, message: '请输入你的密码!',
                                }, {
                                validator: this.validateToNextPassword,
                                }],
                            })(
                                <Input type="password" />
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label="确认密码"
                            >
                            {getFieldDecorator('confirm', {
                                rules: [{
                                required: true, message: '请确认你的密码!',
                                }, {
                                validator: this.compareToFirstPassword,
                                }],
                            })(
                                <Input type="password" onBlur={this.handleConfirmBlur} />
                            )}
                            </FormItem>
                            <FormItem
                            {...formItemLayout}
                            label={(
                                <span>
                                昵称&nbsp;
                                <Tooltip title="你希望别人叫你什么?">
                                    <Icon type="question-circle-o" />
                                </Tooltip>
                                </span>
                            )}
                            >
                            {getFieldDecorator('nickname', {
                                rules: [{ required: true, message: '请输入你的昵称!', whitespace: true }],
                            })(
                                <Input />
                            )}
                            </FormItem>
                            <FormItem {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">Register</Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Form.create()(Register);