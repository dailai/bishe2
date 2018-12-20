import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './index.css';
import Ajax from '../../Ajax';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            bgUrl:'',           //背景图片地址
            list:[],         //视频分类列表
        }
    }
    
    componentDidMount(){
        this.getMenu();
        this.getBg();
    }

    async getMenu(){
        let res = await Ajax.get("/vc/list");
        if ( res.status === 'ok' ){
            this.setState({
                list: res.data.list,
            })
        }
    }

    // 获取背景图
    async getBg(){
        let res = await Ajax.get("/bigimg/get");
        if( res.status === 'ok' && res.code === 200){
            this.setState({
                bgUrl: res.data.url,
            })
        }
    }

    handleClick(id,event){
        const { nav } = this.state;
        if( nav === id){
            return;
        }
        this.setState({
            nav:id,
        })
    }


    render() {
        const { list, bgUrl } = this.state;
        console.log(bgUrl)
        const navbar = list === undefined ?[]:list.map( (videoCat) =>(
            <li key={videoCat.id} className="item-menu">
                <Link to={"/video/"+videoCat.id} className="menu-a">{videoCat.name}</Link>
            </li>
        ))
        return (
            <div id="header-sphere">

                <div className="header-decorate" style={{backgroundImage:"url("+bgUrl+")"}}>
                </div>
                <div className="header_linker">
                    <div className="header-nav-menu">
                        <ul className="nav-menu clearfix">
                            <li className="home">
                                <Link to="/" className="menu-a">首页</Link>
                            </li>
                            {navbar}
                            {/* <li className="item-menu">
                                <Link to="/img" className="menu-a">图集</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
  }
  
  export default Header;