import React from 'react';
import Top from '../component/Top';

class UserLayout extends React.PureComponent{

    render(){
        const { children } = this.props;
        return(
            <React.Fragment>
                <Top/>
                {children}
            </React.Fragment>
        )
    }
}

export default UserLayout;