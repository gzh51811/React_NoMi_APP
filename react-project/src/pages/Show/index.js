import React, { Component } from 'react';

import { Input,Icon,Carousel } from 'antd';

import NavPiao from './NavPiao';
import Scene from './Scene';

import './Show.css';

class Show extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
          };

    }
    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle"/> : null;
        return <div className="show">
            <div className="show_main">
                <div className="show_main_header">
                    <Input
                        placeholder="搜索演出"
                        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={suffix}
                        value={userName}
                        key={userName}
                    />
                </div>
                <div><img width="100%" alt="" src={require('../../assets/ych.jpg')}/></div>
                <NavPiao/>
                <div className="verticalCarousel">
                    <Carousel vertical  dots={false}>
                        <div><p>「一起做个梦」音乐现场</p></div>
                        <div><p>Beatrich 2019 China Tour 广州站</p></div>
                        <div><p>志国夜总会 广州专场</p></div>
                    </Carousel>
                </div>
                <Scene/>
            </div>
        </div>
    }
}

export default Show;