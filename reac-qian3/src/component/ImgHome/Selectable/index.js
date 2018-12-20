import React, { Component } from 'react';
import { message } from 'antd';
import './index.css';
import Ajax from '../../../Ajax';

//可选择的，用于图片分类选择
class Selectable extends Component {

  constructor(props){
    super(props);
    this.state = {
      catList:[],   //保存分类列表
      catId:0,        //保存当前选择的分类id，全部为0
    }
  }

  componentDidMount(){
    this.getCat();
  }

  async getCat(){
    let res = await Ajax.get('/imgcat/all');
    if(res.status === 200){
      this.setState({
        catList: res.data,
      })
    }else{
      message.error("网络发送错误");
    }
    
  }

  //处理点击
  handleOnClick(id,event){
    this.setState({
      catId:id,
    })
    this.props.getImgGather(id);
  }


  


  render() {
    const { catList, catId } = this.state;
    
    const catLi = catList == []?[]:catList.map((result) =>{
      return(
        <li key={result.id} value={result.id} 
          style={catId == result.id?{backgroundColor:"coral"}:{}}
          onClick={this.handleOnClick.bind(this,result.id)}
        >
          {result.name}
        </li>
      )
    });

    return (
      
      <div className="selectable-content">
      <div className="is">
        <ul className="img-select">
          <li onClick={this.handleOnClick.bind(this,0)}
              style={catId == 0?{backgroundColor:"coral"}:{}}>
            全部
          </li>
          {catLi}
        </ul>
      </div>
    </div>
    );
  }
}

export default Selectable;