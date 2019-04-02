import React, { Component } from 'react';
import {Icon} from 'antd';
class search extends Component{
    render(){
        return <div className="r-search">
            <a href="###">
                <div className="r-search-city">
                    <p>广州市</p>
                    <b></b>
                </div>
            </a>
            <a href="###">
                <div className="r-search-inner touching">
                    <Icon type="search" /><span>影院、影片、演出、明星</span>
                </div>
            </a>
        </div>
    }
}
export default search;