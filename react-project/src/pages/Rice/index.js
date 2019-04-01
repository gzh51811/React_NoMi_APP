import React, { Component } from 'react';

import { Input,Icon } from 'antd';

import './Rice.css';


class Rice extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
          };

    }
    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle"/> : null;
        return <div className="Rice">
            <div className="rice_main">
                <div className="rice_main_header">
                    <Input
                        placeholder="搜索饭圈"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        key={userName}
                    />
                </div>
                <div className="rice_main_slider">
                    <div className="rice_main_slider_item">
                        <div className="slider_item_head">
                            <span className="head_ti">明星票房榜</span>
                            <span className="head_geng">
                                更多
                                <Icon type="right" />
                            </span>
                        </div>
                        <div className="slider_item_list">
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Rice;