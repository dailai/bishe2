import React, { PureComponent, Fragment } from 'react';
import { Card } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


export default class User extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }

  render() {
    const { location, children } = this.props;
    return (
      <PageHeaderWrapper
        // title='用户信息'
        tabActiveKey={location.pathname}
        content='请谨慎操作前台用户的有关信息'
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