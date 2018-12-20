import React from 'react';
import Top from '../component/Top';
import Header from '../component/Header';

class BasicLayout extends React.PureComponent{

    render(){
        const { children } = this.props;
        return(
            <React.Fragment>
                <Top/>
                <Header/>
                {children}
            </React.Fragment>
        )
    }
}

export default BasicLayout;