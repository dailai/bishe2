import React, { PureComponent, Fragment } from 'react';
import { Card } from 'antd'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';




class Welcome extends PureComponent {

    render() {
        return(
            <PageHeaderWrapper
                // title='用户信息'
                tabActiveKey={location.pathname}
                content='欢迎页'
            >
                <Card bordered={false}>
                    <Fragment>
                        <h1>欢迎登陆</h1>
                    </Fragment>
                </Card>
            </PageHeaderWrapper>
        )
    }
}

export default Welcome;
