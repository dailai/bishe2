import React, { Component} from 'react';
import './index.css';

class Page extends Component {

    constructor(props){
        super(props);
        this.state = {
            // current:1,               //索引在第一页
        }
    }

    componentDidMount(){

    }

    //渲染索引列表
    pageBody(totalPages,current,handleOnClick){
        if( current <= 4){
            if( totalPages <= 7 ){
                var list = [];
                for(var i=1;i<=totalPages;i++){
                    list.push(i);
                }
                return(
                    <ul className="pages">
                    {current === 1?[]:<li className="page-item prev" onClick={(e) =>handleOnClick(current-1)}>
                        <button className="nav-btn">上一页</button>
                    </li>}
                    {list.map((value) =>(
                        <li key={value} className={"page-item "+(current===value?"active":"")} onClick={(e) =>handleOnClick(value)}>
                                <button className="pageination-btn num-btn">{value}</button>
                        </li>
                    ))}
                    {totalPages > 1?<li className="page-item next" onClick={(e) =>handleOnClick(current+1)}>
                        <button className="nav-btn">下一页</button>
                    </li>:[]}
                </ul>
                )
            }
            return(
                <ul className="pages">
                    {current === 1?[]:<li className="page-item prev" onClick={(e) =>handleOnClick(current-1)}>
                        <button className="nav-btn">上一页</button>
                    </li>}
                    <li className={"page-item "+(current==1?"active":"")} onClick={(e) =>handleOnClick(1)}>
                        <button className="pageination-btn num-btn">1</button>
                    </li>
                    <li className={"page-item "+(current===2?"active":"")} onClick={(e) =>handleOnClick(2)}>
                        <button className="pageination-btn num-btn">2</button>
                    </li>
                    <li className={"page-item "+(current===3?"active":"")} onClick={(e) =>handleOnClick(3)}>
                        <button className="pageination-btn num-btn">3</button>
                    </li>
                    <li className={"page-item "+(current===4?"active":"")} onClick={(e) =>handleOnClick(4)}>
                        <button className="pageination-btn num-btn">4</button>
                    </li>
                    <li className={"page-item "+(current===5?"active":"")} onClick={(e) =>handleOnClick(5)}>
                        <button className="pageination-btn num-btn">5</button>
                    </li>
                    <li className={"page-item "+(current===6?"active":"")} onClick={(e) =>handleOnClick(6)}>
                        <button className="pageination-btn num-btn">6</button>
                    </li>
                    {totalPages <= 7 ?[]:<strong>...</strong>}
                    <li className="page-item last"  onClick={(e) =>handleOnClick(totalPages)}>
                        <button className="pageination-btn num-btn">{totalPages}</button>
                    </li>
                    <li className="page-item next" onClick={(e) =>handleOnClick(current+1)}>
                        <button className="nav-btn">下一页</button>
                    </li>
                </ul>
            )
        }
        if( current > 4 && current <= totalPages - 4){
            return(
                <ul className="pages">
                    <li className="page-item prev" onClick={(e) =>handleOnClick(current-1)}>
                        <button className="nav-btn">上一页</button>
                    </li>
                    <li className="page-item"   onClick={(e) =>handleOnClick(1)}>
                        <button className="pageination-btn num-btn">1</button>
                    </li>
                    <strong>...</strong>
                    <li className="page-item" onClick={(e) =>handleOnClick(current-2)}>
                        <button className="pageination-btn num-btn">{current-2}</button>
                    </li>
                    <li className="page-item" onClick={(e) =>handleOnClick(current-1)}>
                        <button className="pageination-btn num-btn">{current-1}</button>
                    </li>
                    <li className="page-item active" onClick={(e) =>handleOnClick(current)}>
                        <button className="pageination-btn num-btn">{current}</button>
                    </li>
                    <li className="page-item" onClick={(e) =>handleOnClick(current+1)}>
                        <button className="pageination-btn num-btn">{current+1}</button>
                    </li>
                    <li className="page-item" onClick={(e) =>handleOnClick(current+2)}>
                        <button className="pageination-btn num-btn">{current+2}</button>
                    </li>
                    <strong>...</strong>
                    <li className="page-item last" onClick={(e) =>handleOnClick(totalPages)}>
                        <button className="pageination-btn num-btn">{totalPages}</button>
                    </li>
                    <li className="page-item next" onClick={(e) =>handleOnClick(current+1)}>
                        <button className="nav-btn">下一页</button>
                    </li>
                </ul>
            )
        }
        if( current > totalPages - 4){
            return(
                <ul className="pages">
                    <li className="page-item prev" onClick={(e) =>handleOnClick(current-1)}>
                        <button className="nav-btn">上一页</button>
                    </li>
                    <li className="page-item" onClick={(e) =>handleOnClick(1)}>
                        <button className="pageination-btn num-btn">1</button>
                    </li>
                    <strong>...</strong>
                    <li className={"page-item "+(current===totalPages-5?"active":"")} onClick={(e) =>handleOnClick(current-5)}>
                        <button className="pageination-btn num-btn">{totalPages-5}</button>
                    </li>
                    <li className={"page-item "+(current===totalPages-4?"active":"")} onClick={(e) =>handleOnClick(current-4)}>
                        <button className="pageination-btn num-btn">{totalPages-4}</button>
                    </li>
                    <li className={"page-item "+(current===totalPages-3?"active":"")} onClick={(e) =>handleOnClick(current-3)}>
                        <button className="pageination-btn num-btn">{totalPages-3}</button>
                    </li>
                    <li className={"page-item "+(current===totalPages-2?"active":"")} onClick={(e) =>handleOnClick(current-2)}>
                        <button className="pageination-btn num-btn">{totalPages-2}</button>
                    </li>
                    <li className={"page-item "+(current===totalPages-1?"active":"")} onClick={(e) =>handleOnClick(current-1)}>
                        <button className="pageination-btn num-btn">{totalPages-1}</button>
                    </li>
                    <li className={"page-item "+(current===totalPages?"active":"")} onClick={(e) =>handleOnClick(totalPages)}>
                        <button className="pageination-btn num-btn">{totalPages}</button>
                    </li>
                    {current === totalPages?[]:<li className="page-item next" onClick={(e) =>handleOnClick(current+1)}>
                        <button className="nav-btn">下一页</button>
                    </li>}
                </ul>
            )
        }
    }

  render(){
    const { totalElements, totalPages, current, handleOnClick, handleSkip } = this.props;
    const list = this.pageBody(totalPages,current,handleOnClick);
    return (
      <div id="pageination" className="page-module">
        {list}
        <div className="jump-pager">
            <div className="page-total">
                <span className="count">共{totalPages}页/{totalElements}个，</span>
            </div>
            <span>跳至</span>
            <input type="text" min="1" className="jump-pager-input no-pin" onKeyDown={(e)=>{if(e.keyCode==13){handleSkip(e.target.value);e.target.value="";}}} />
            <span>页</span>
        </div>
      </div>
    );
  }
}
{/* <ul className="pages">
            <li className="page-item prev">
                <button className="nav-btn">上一页</button>
            </li>
            <li className={"page-item "+current===1?"active":""}>
                <button className="pageination-btn num-btn">1</button>
            </li>
            {current >=4?<strong>...</strong>:[]}

            <li className={"page-item "+current===current-2?"active":""}>
                <button className="pageination-btn num-btn">2</button>
            </li>
            <li className={"page-item "+current===1?"active":""}>
                <button className="pageination-btn num-btn">3</button>
            </li>
            <li className={"page-item "+current===1?"active":""}>
                <button className="pageination-btn num-btn">4</button>
            </li>
            <li className={"page-item "+current===1?"active":""}>
                <button className="pageination-btn num-btn">5</button>
            </li>
            <li className={"page-item "+current===1?"active":""}>
                <button className="pageination-btn num-btn">6</button>
            </li>

            {current <= totalPages-4?<strong>...</strong>:[]}
            <li className="page-item last">
                <button className="pageination-btn num-btn">100</button>
            </li>
            <li className="page-item next">
                <button className="nav-btn">下一页</button>
            </li>
        </ul> */}

        /***************************
         * 下面这是上边莫名出现BUG的地方
         * list里面的li触发handleOnClick(i),打印出来都是5
         * 这一部分bug已经解决
         */
        // if( current <= 4){
        //     if( totalPages <= 7 ){
        //         var list = [];
        //         for(var i=1;i<=totalPages;i++){
        //             list.push(
        //                 <li key={i} className={"page-item "+(current===i?"active":"")} onClick={(e) =>handleOnClick(i)}>
        //                     <button className="pageination-btn num-btn">{i}</button>
        //                 </li>
        //             )
        //         }
        //         return(
        //             <ul className="pages">
        //             {current === 1?[]:<li className="page-item prev" onClick={(e) =>handleOnClick(current-1)}>
        //                 <button className="nav-btn">上一页</button>
        //             </li>}
        //             {list}
        //             {totalPages > 1?<li className="page-item next" onClick={(e) =>handleOnClick(current+1)}>
        //                 <button className="nav-btn">下一页</button>
        //             </li>:[]}
        //         </ul>
        //         )
        //     }

export default Page;