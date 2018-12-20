import React, { Component } from 'react';
import {Link} from 'react-router';
import './CatImg.css';

//显示单个图片,所有分类的图片都使用这个显示
class CatImg extends Component {


  render() {
    return (
      <div className="cig-d">
        <ul className="cig-list">
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
          <li className="cig-item">
            <Link to="" className="cig-a">
              <img className="cig-img" src={require("../../static/fun.jpg")}></img>
              <em>如果没有这些小毛病，你就完美了！</em>
              <i className="cig-tit">搞笑GIF</i>
            </Link>
          </li>
        </ul>
      </div>
      
    );
  }
}

export default CatImg;


