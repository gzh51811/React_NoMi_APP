import React, { Component } from 'react';
import { Route, Redirect, Switch ,HashRouter,withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home/home';
import Movie from './pages/Movie/movie';
import Theatre from './pages/Theatre/theatre';
import User from './pages/User/user';

// 引入antd框架
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider, } = Layout;



class App extends Component {
    constructor() {
        super();
        this.state = {
            navs: [
                {
                    text:'首页',
                    name:'Home',
                    path:'/home',
                    icon:'home'
                },
                {
                    text:'影片管理',
                    name:'Movie',
                    path:'/movie',
                    icon:'video-camera'
                },
                {
                    text:'影院信息',
                    name:'Theatre',
                    path:'/theatre',
                    icon:'tag'
                },
                {
                    text:'用户管理',
                    name:'User',
                    path:'/user',
                    icon:'user'
                }
            ],
            current:'Home'
        }
    }
    handleClick=(e)=>{
        console.log(e);
        this.setState({
            current:e.key
        },()=>{
            // 路由跳转，编程式导航
            // 
            this.props.history.push('/'+e.key.toLowerCase());
        })
    }
    render() {
        return (
            <Layout>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {/*是否到达响应式临界点*/}}
                onCollapse={(collapsed, type) => { /*侧边导航展开与收缩*/ }}
                >
                <div className="logo" />
                <Menu theme="dark" mode="inline" onClick={this.handleClick}>
                    {
                        this.state.navs.map(item=><Menu.Item key={item.name}>
                            <Icon type={item.icon} />
                            <span className="nav-text">{item.text}</span>
                        </Menu.Item>)
                    }
                </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/movie' component={Movie}/>
                            <Route path='/theatre' component={Theatre}/>
                            <Route path='/user' component={User}/>
                        </Switch>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    糯米电影后台管理系统
                </Footer>
                </Layout>
            </Layout>
            
        );
    }
}

App = withRouter(App);

export default App;
