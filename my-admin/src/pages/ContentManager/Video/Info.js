import React, { PureComponent } from 'react';
import { Table, Divider, Tag, Switch, Popconfirm, Card } from 'antd';
import DescriptionList from '@/components/DescriptionList';
import { connect } from 'dva';

const { Description } = DescriptionList;


@connect(({ video, }) => ({
    info: video.info,
}))
class Info extends PureComponent {

    render(){
        const { info } = this.props;

        return(
            <Card bordered={false}>
                <DescriptionList size="large" title="视频信息" style={{ marginBottom: 32 }}>
                    <Description term="id" column={3}>{info.id}</Description>
                    <Description term="投稿人昵称">{info.nickname}</Description>
                    <Description term='创建时间'>{info.createTime}</Description>
                    <Description term="标题">{info.title}</Description>
                    <Description term="简介">{info.briefIntroduction}</Description>
                    <Description term="时长">{info.duration}</Description>
                    <Description term="审核状态">{info.checkStatus}</Description>
                    <Description term='播放状态'>{info.showStatus}</Description>
                    <Description term="播放次数">{info.playNum}</Description>
                    <Description term='点赞次数'>{info.goodNum}</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
                <DescriptionList size="large" title="资源信息" style={{ marginBottom: 32 }}>
                    <Description term="资源路径">{info.path}</Description>
                    <Description term='封面路径'>{info.coverPath}</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
                <DescriptionList size="large" title="投稿人信息" style={{ marginBottom: 32 }}>
                    <Description term="投稿人昵称">{info.nickname}</Description>
                </DescriptionList>
                <Divider style={{ marginBottom: 32 }} />
            </Card>
        )
    }
}

export default Info;