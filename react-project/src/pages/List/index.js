import React,{Component} from 'react';
import { BackTop } from 'antd';

import './List.css';

import withAxios from '../../hoc/withAxios';

//组件
import Nav from './Nav';
import Film from './Film';
import Cinema from './Cinema';

class List extends Component{
    constructor(){
        super();

        this.state={
            active:true
        }
        this.bodyShow=this.bodyShow.bind(this);
    }

    bodyShow(msg){
        this.setState({
            active:msg
        })
        // console.log(msg)
    }

    render(){
        // console.log(this);
        let {active} = this.state
        return <div className="List">
                <Nav
                method={{
                    bodyShow:this.bodyShow,
                }}/>
                {active ? <Film history={this.props.history}/> : <Cinema/>}
                <div className="hint">
                    <span>没有更多了</span>
                </div>
                <div className="goTop">
                    <BackTop />
                    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
                </div>
            </div>
    }
}

List=withAxios(List);

export default List;