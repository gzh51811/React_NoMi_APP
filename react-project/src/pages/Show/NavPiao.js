import React, { Component } from 'react';

import {  } from 'antd';

class NavPiao extends Component{
    constructor(){
        super();
        this.state = {
            nav:[
                {
                    title:'演唱会',
                    img:'37d12f2eb9389b50798693bd8d35e5dde6116ee7.jpg'
                },
                {
                    title:'话剧舞台剧',
                    img:'d8f9d72a6059252dd7636eeb3c9b033b5ab5b9ec.jpg'
                },
                {
                    title:'儿童亲子',
                    img:'377adab44aed2e7348a3f6c38f01a18b86d6fa93.jpg'
                },
                {
                    title:'小型现场',
                    img:'2934349b033b5bb5c03550113ed3d539b700bc7a.jpg'
                },
                {
                    title:'更多',
                    img:'8694a4c27d1ed21b88175e0aa56eddc450da3f06.jpg'
                }
            ]
          };
    }
    render(){
        return <div>
            <div className="option">
                {this.state.nav.map(item=><div key={item.img}><img width="80%" alt="" src={require('../../assets/'+item.img)}/><p>{item.title}</p></div>)}
                
            </div>
        </div>
    }
}

export default NavPiao;