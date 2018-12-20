import React from 'react';
import { Layout, } from 'antd';
// 布局
import BasicLayout from './BasicLayout';
import UserLayout from './UserLayout';
import Routers from '../routers/Routers';

class Layouts extends React.PureComponent{

    state = {
        layout: '',
    }

    // 获取页面路径
    getRelativePath(){
　　　　 var url = document.location.toString();
　　　　 var arrUrl = url.split("//");

　　　　 var start = arrUrl[1].indexOf("/",2);
        console.log(start)
　　　　 var relUrl = arrUrl[1].substring(start+2);// 带有/#/xxx，需要加2

　　　　 if(relUrl.indexOf("?") != -1){
　　　　　　 relUrl = relUrl.split("?")[0];
　　　　 }
　　　　 return relUrl;
　　}
    
    // 获取布局
    getLayout(relativePath){
        let layout = '';
        Routers.map((item) => {
            item.routes.map((route) => {
                return route.component === relativePath ? 
                        layout = item.layout : '';
            });
        });
        return layout;
    }

    render(){
        console.log(this.getRelativePath());
        const layout = this.getLayout(this.getRelativePath())
        const { children } = this.props;
        const layoutRender = (
            <Layout>
                { layout === '/BasicLayout' ? (
                    <BasicLayout>
                        {children}
                    </BasicLayout>
                ) : (
                    <UserLayout>
                        {children}
                    </UserLayout>
                )}
            </Layout>
        );

        return(
            <React.Fragment>
                {layoutRender}
            </React.Fragment>
        )
    }
}

export default Layouts;