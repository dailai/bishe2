import React, { Component } from 'react';
import './index.css';
import { message } from 'antd';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Ajax from '../../Ajax';
import { signoutSuccess } from '../../action';
// import { fakeAuth } from '../Login/PrivateRoute.js';

class Top extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }

    componentWillMount(){

    }



    //退出
    async signout(){
        const { logined, user } = this.props;
        if(!logined){
            message.error("出现了意象不到的错误");
        }
        let formData = new FormData();
        formData.append('username',user.username);
        let res = await Ajax.post('/user/out',formData);
        if(res.status === 200){
            // fakeAuth.signout();
            this.props.dispatch(signoutSuccess());  //将store里面的user信息删掉
            message.success("成功登出");
        }else{
            message.error(res.msg);
        }
    }

    render() {
        const { logined, user } = this.props 
        // if(logined) fakeAuth.authenticate();
        return (
            <div id="top-moudle" className="user-nav-menu">
                <div className="top-area">
                    {/* 给一个首页地址 */}
                    <div className="page-nav">
                        <Link to="/" replace>首页</Link>
                    </div>
                    {/* 投稿 */}
                    <div className="user-contribute">
                        <a className="user-tougao" >投稿</a>
                        <ul className="user-up-nav">
                            <li className="ucs">
                                <Link to="/upload">
                                {/* <Link to="/"> */}
                                    <i className="tg-duanzi "></i><span>投稿图片</span>
                                </Link>
                            </li>
                            <li className="ucs">
                                <Link to="/upload">
                                    <i className="tg-shiping"></i><span>投稿视频</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="us-nav">
                        
                        <div className="us-info" >
                        {/* 未登录 */}    
                            <div className="no-login"style={logined ? {display:"none"}:{display:"block"}}>
                                <Link to="/login" title="还没登陆！" replace>
                                    <img src={require('../../static/akari.jpg')} alt="" />
                                </Link>
                            </div>
                        {/* 已登录 */}
                            <div className="al-login" style={logined ? {display:"block"}:{display:"none"}}>
                                <Link to="" className="face">
                                    <div className="d-face">
                                        <img src={require('../../static/noface.gif')} alt="" />
                                    </div>
                                </Link>
                                <div id="user-al-lo" className="us-lo-info">
                                    <div className="user-info">
                                        <div className="username">{user.nickname}</div>
                                        <div className=""></div>
                                    </div>
                                    <div className="user-menu">
                                        <ul className="clearfix">
                                            <li>
                                                <Link to="">
                                                    <i className="b-icon"></i>
                                                    个人中心
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="user-menu-bottom">
                                        <span href="" className="signout" onClick={this.signout.bind(this)}>退出</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateTopProps = state =>{
    return {
    logined:state.logined,
    user:state.user,
}}

export default connect(mapStateTopProps,null)(Top);