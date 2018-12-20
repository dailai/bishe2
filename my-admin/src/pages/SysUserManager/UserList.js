import React, { PureComponent } from 'react';
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
} from 'antd';
import { connect } from 'dva';
import FooterToolbar from '@/components/FooterToolbar';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import UserForm from './UserForm';
import styles from './style.less';

const { Option } = Select;
const { RangePicker } = DatePicker;

const tableData = [
  {
    key: '1',
    id:'1',
    createTime: '2018-12-06 19:03:00',
    name: 'John Brown',
    username: '123456789123',
    email: '123456789123',
    phone: '123456789123',
    role: 'admin',
  },
  {
    key: '2',
    id:'2',
    createTime: '2018-12-06 19:03:00',
    name: 'xxxx',
    username: '123456789123',
    email: '123456789123',
    phone: '123456789123',
    role: 'user',
  },
];

@connect(({ loading, adminUser }) => ({
  submitting: loading.effects['form/submitAdvancedForm'],
  data: adminUser.list,
}))
@Form.create()
class UserList extends PureComponent {
  state = {
    width: '100%',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'adminUser/fetch',
    });
    window.addEventListener('resize', this.resizeFooterToolbar, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeFooterToolbar);
  }

  getErrorInfo = () => {
    const {
      form: { getFieldsError },
    } = this.props;
    const errors = getFieldsError();
    const errorCount = Object.keys(errors).filter(key => errors[key]).length;
    if (!errors || errorCount === 0) {
      return null;
    }
    const scrollToField = fieldKey => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);
      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };
    const errorList = Object.keys(errors).map(key => {
      if (!errors[key]) {
        return null;
      }
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <Icon type="cross-circle-o" className={styles.errorIcon} />
          <div className={styles.errorMessage}>{errors[key][0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={trigger => trigger.parentNode}
        >
          <Icon type="exclamation-circle" />
        </Popover>
        {errorCount}
      </span>
    );
  };

  resizeFooterToolbar = () => {
    requestAnimationFrame(() => {
      const sider = document.querySelectorAll('.ant-layout-sider')[0];
      if (sider) {
        const width = `calc(100% - ${sider.style.width})`;
        const { width: stateWidth } = this.state;
        if (stateWidth !== width) {
          this.setState({ width });
        }
      }
    });
  };

  validate = () => {
    const {
      form: { validateFieldsAndScroll },
      dispatch,
    } = this.props;
    validateFieldsAndScroll((error, values) => {
      if (!error) {
        // submit the values
        dispatch({
          type: 'form/submitAdvancedForm',
          payload: values,
        });
      }
    });
  };

  // 处理添加或修改
  handleSave(data){
    const { dispatch } = this.props;
    dispatch({
      type: 'adminUser/fetchSave',
      payload: data,
    })
  }

  // 处理删除
  handleRemove(data){
    const { dispatch } = this.props;
    dispatch({
      type: 'adminUser/fetchRemove',
      payload: data,
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      submitting,
      data,
    } = this.props;
    const { width } = this.state;

    return (
      <PageHeaderWrapper
        title="系统管理员操作"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="后台系统用户列表" bordered={false}>
          <UserForm value={data} 
                    handleSave={(e)=>this.handleSave(e)}
                    handleRemove={(e)=>this.handleRemove(e)}/>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default UserList;
