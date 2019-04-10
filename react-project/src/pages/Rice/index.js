import React, { Component } from 'react';

import { Menu,Input,Icon } from 'antd';

import './Rice.css';

import Fq from './Fq';
import Move from './Move';
import Atten from './Atten';
import Plaza from './Plaza';

import { Route,  Switch} from 'react-router-dom';

class Rice extends Component{
    constructor(){
        super();
        this.state = {
            userName: '',
            navList:[
				{
					text: '饭圈',
					name: 'Fq',
					path: '/fq'
				} ,
				{
					text: '视频',
					name: 'Move',
					path: '/move'
				} ,
				{
					text: '关注',
					name: 'Atten',
					path: '/atten'
				},
				{
					text: '广场',
					name: 'Plaza',
					path: '/plaza'
				}
               
            ],
            curr: 'Plaza',
            RiceList:[
                {
                    imgurl:'Rice1.jpg',
                    name:'吴京',
                    poll:'2.8万张',
                    movieName:'流浪地球'
                },
                {
                    imgurl:'Rice2.jpg',
                    name:'周星驰',
                    poll:'4387张',
                    movieName:'新喜剧之王'
                },
                {
                    imgurl:'Rice3.jpg',
                    name:'布丽·拉尔森',
                    poll:'2039张',
                    movieName:'惊奇队长'
                },
                {
                    imgurl:'Rice4.jpg',
                    name:'詹妮弗·康纳利',
                    poll:'1870张',
                    movieName:'阿丽塔：战斗天使'
                },
                {
                    imgurl:'Rice5.jpg',
                    name:'陈意涵',
                    poll:'1358张',
                    movieName:'比悲伤更悲伤的故事'
                }
            ]
          };

    }
    handleChildClick = (e)=>{
	    this.setState({
	        curr: e.key
	    },()=>{
	        this.props.history.push(this.props.match.url +'/'+ e.key.toLowerCase());
	    });
	}
    render(){
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle"/> : null;
       
        return <div className="Rice">
            <div className="rice_main">
                <div className="rice_main_header">
                    < Input
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
                            <div className="item_list_long">
                            {
                                this.state.RiceList.map(item => (<div className="list_long_item" key={item.name}>
                                <div className="long_item_img">
                                    <img src={require('../../assets/'+item.imgurl)} alt="" />
                                </div>
                                <p className="long_item_name">{item.name}</p>
                                <p className="long_item_poll">{item.poll}</p>
                                <p className="long_item_mv">{item.movieName}</p>
                            </div>))
                            }
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="slider_item_nav">          
                    <Menu
                    onClick={this.handleChildClick}
                    selectedKeys={[this.state.curr]}
                    mode="horizontal"
                    >
                    {
                        this.state.navList.map(item => <Menu.Item key={item.name}>
                        {item.text}
                        </Menu.Item>)
                    }
                    </Menu>
                    <Switch>
                        <Route path={`${this.props.match.path}/fq`} component={Fq} />
                        <Route path={`${this.props.match.path}/move`} component={Move} />
                        <Route path={`${this.props.match.path}/atten`} component={Atten} />
                        <Route path={`${this.props.match.path}/plaza`} component={Plaza} />
                    </Switch>
                </div>
            </div>
            
        </div>
        
    }
}

export default Rice;