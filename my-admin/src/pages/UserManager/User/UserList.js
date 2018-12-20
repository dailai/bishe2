import React, { PureComponent } from 'react';
import { Table, Divider, Switch, Popconfirm, Card } from 'antd';
import FooterToolbar from '@/components/FooterToolbar';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';
import { connect } from 'dva';
import Link from 'umi/link';


@connect(({ user, loading }) => ({
    users: user.list,
    loading: loading.models.rule,
}))
class UserList extends PureComponent {

    constructor(props){
        super(props);
        this.state={
            width: '100%'
        }
    }

    componentDidMount(){
        const { dispatch } = this.props;
        dispatch({
            type: 'user/fetch',
        });
    }

    onChange(id) {
        const { users, dispatch} = this.props;
        users.map(function(value){
            if(value.id === id ){
                const status = value.status === 1?0:1;
                dispatch({
                    type: 'user/changeStatus',
                    payload: {id, status}
                })
            }
        })
        console.log(`switch to ${id}`);

    }

    remove(key) {
        const { dispatch } = this.props;
        const id = key;
        dispatch({
            type: 'user/remove',
            payload: {id}
        })
        // const newData = data.filter(item => item.key !== key);
        // this.setState({ data: newData });
    }

    generateTableData(){
        const { users } = this.props;
        let data = [];
        users.map((value) =>(
            data.push({key:value.id,...value})
        ))
        return data;
    }

    render() {
        const data = this.generateTableData();
        const { width } = this.state; 
        const columns = [{
            title: '昵称',
            dataIndex: 'nickname',
            key: 'nickname',
            render: text => <a href="javascript:;">{text}</a>,
        }, {
            title: '时间',
            dataIndex: 'createTime',
            key: 'createTime',
        },{
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
        }, {
            title:'状态',
            dataIndex:'status',
            key:'status',
            render: (status,record) =>(
                <span>
                    <Switch 
                    checkedChildren="正常" 
                    unCheckedChildren="冻结" 
                    defaultChecked={status==0?true:false} 
                    onChange={()=>this.onChange(record.id)}/>
                </span>
            )
        },{
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <span>
            <Popconfirm title="是否删除此用户" onConfirm={() => this.remove(record.key)}>
                <a>删除</a>
            </Popconfirm>
            <Divider type="vertical" />
            <Link to={'/usermanager/user/user-list/info?id='+record.id}>详细信息</Link>
            </span>
        ),
        }];
        
        return(
                <Card title="前台用户管理" bordered={false}>
                    <Table columns={columns} dataSource={data} />
                </Card>
        )
    }
}

export default UserList;