import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { message, Icon, Button, Input, Form, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { loginSuccess } from '../../action';
import Ajax from "../../Ajax";
import './Login.css';
import Top from '../../component/Top';

const FormItem = Form.Item;

class Login extends Component {

    state = {
    };

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          let formData = new FormData()
          formData.append('username',values.username);
          formData.append('password',values.password);
          this.handleSubmitAjax(formData);
        }
      });
    }

    async handleSubmitAjax(formData){
      const res = await Ajax.post('/user/login',formData);
      console.log(res)
      if(res.code === 200 && res.status === 'ok'){
          message.success('登陆成功，跳转到首页！');
          this.props.dispatch(loginSuccess(res.data.user)); //将返回的用户信息保存在store
          setTimeout(() =>{
              this.props.history.push('/');  //跳转
          },1000);
      }else{
        message.error("登陆失败："+res.data.msg);
      }
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;

      return (
        
          <React.Fragment>
              <Top/>
              <div id="login-app">
                <div className="login-input-area">
                  <Form onSubmit={this.handleSubmit} className="login-form" id="components-form-normal-login">
                    <FormItem>
                      {getFieldDecorator('username', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('password', {
                        rules: [{ required: true, message: '请输入密码!' }],
                      })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                      })(
                        <Checkbox>记住我</Checkbox>
                      )}
                      <a className="login-form-forgot" href="">忘记密码了</a>
                      <Button type="primary" htmlType="submit" className="login-form-button">
                        登陆
                      </Button>
                      Or <Link to="/register">现在注册!</Link>
                    </FormItem>
                  </Form>
                </div>
              </div>
          </React.Fragment>
      );
    }   
}
Login = connect()(Form.create()(Login));

export default Login;
