import React, { PureComponent, Fragment } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


export default class Video extends PureComponent {


  render() {
    const { location, children } = this.props;
    return (
      <PageHeaderWrapper
         title='视频管理'
        tabActiveKey={location.pathname}
        // content='请谨慎操作前台用户的有关信息'
      >
        <Card bordered={false}>
          <Fragment>
            {children}
          </Fragment>
        </Card>
      </PageHeaderWrapper>
    );
  }
}