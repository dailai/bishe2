import React, { PureComponent } from 'react';
import { Table, Divider, Tag, Switch, Popconfirm, Card } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import styles from './UserInfo.less';
import { connect } from 'dva';

const { Description } = DescriptionList;


@connect(({ user, }) => ({
    info: user.info,
}))
class UserInfo extends PureComponent {

    render(){
        const { info } = this.props;

        return(
            <Card bordered={false}>
                <div>
                    <div className={styles.avatarHolder} >
                        <img alt=""src={info.avatar}/>
                        <div className={styles.name} >昵称：{info.nickname}</div>
                        <div></div>
                    </div>

                </div>

                <DescriptionList size="large" style={{ marginBottom: 32 }}>
                    <Description term="id">{info.id}</Description>
                    <Description term='创建时间'>{info.createTime}</Description>
                    <Description term="头像路径">{info.avatar}</Description>
                    <Description term="用户名">{info.username}</Description>
                    <Description term="密码">{info.password}</Description>
                    <Description term="视频投稿数量">{info.videoNum}</Description>
                    <Description term="账号状态">{info.status === 0?'正常':'冻结'}</Description>
                </DescriptionList>
            </Card>
        )
    }
}

export default UserInfo;