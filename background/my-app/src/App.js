import React, { Component } from 'react';
import { Route, Redirect, Switch ,withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import withAxios from './hoc/withAxios';

import Home from './pages/Home/home';
import Movie from './pages/Movie/movie';
import Theatre from './pages/Theatre/theatre';
import User from './pages/User/user';

// 引入antd框架
import { Layout, Menu, Icon ,message} from 'antd';
const { Header, Content, Footer, Sider, } = Layout;



class App extends Component {
    constructor() {
        super();
        this.state = {
            name:"",
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
    async componentDidMount(){
        //用token验证登录
        let storage = localStorage.getItem('user');
        if(storage){
            let str = JSON.parse(storage);
            console.log(str.name);
            let res = await this.props.axios.post('/tokenverify',{
                params:{
                    token:str.token,
                }
            })
            this.setState({
                name:str.username
            })
            if(res.data.code == 0){
                message.success('欢迎您'+ this.state.name);
            }else if(res.data.code == 1){
                message.error('您还为登录哦~请先登录');
                this.props.history.push('/login');
            }
        }else{
            message.error('您还为登录哦~请先登录');
            this.props.history.push('/login');
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
    onExit(){
        localStorage.removeItem('user');
        this.props.history.push('/login');
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
                <p className="app_p">欢迎您，{this.state.name} </p>
                <a href="javascript:;" className="app_exit" onClick={this.onExit.bind(this)}>退出登录</a>
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
                            <Redirect from='/' to='/home'/>
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
App = withAxios(App);
export default App;
