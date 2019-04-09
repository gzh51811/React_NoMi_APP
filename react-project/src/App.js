import React, { Component } from 'react';

import Home from './pages/Home';
import List from './pages/List';
import Listitem from './pages/List/List2.jsx';
import Itemsite from './pages/List/List1.jsx';
import Show from './pages/Show';
import Rice from './pages/Rice';
import Mine from './pages/Mine';
// import Login from './pages/Login';


import './App.css'
import {Icon} from 'antd';

import { Route, Redirect, Switch, withRouter,NavLink } from 'react-router-dom';

class App extends Component {
	constructor() {
		super();
		this.state = {
			navs: [
				{
					text: '推荐',
					name: 'Home',
					path: '/home',
					icon: 'home'
				},
				{
					text: '电影',
					name: 'List',
					path: '/list',
					icon: 'home'
				},
				
				{
					text: '演出',
					name: 'Show',
					path: '/show',
					icon: 'home'
				},
				{
					text: '饭圈',
					name: 'Rice',
					path: '/rice',
					icon: 'home'
				},
				{
					text: '我的',
					name: 'Mine',
					path: '/mine',
					icon: 'home'
				}
			],
			current: 'Home',
			route: [
				{
					text: '登录',
					name: 'Login',
					path: '/login',
				},
				{
					text: '注册',
					name: 'Reg',
					path: '/reg',
				},{
					text: '电影',
					name: 'Listitem',
					path: '/listitem',
					icon: 'home'
				},
				{
					text: '电影',
					name: 'Itemsite',
					path: '/itemsite',
					icon: 'home'
				}
			]
		};
	}
	handleClick = (e)=>{
	    this.setState({
	        current: e.key
	    },()=>{
	        this.props.history.push('/'+e.key.toLowerCase());
	    });
	}

	render() {
		return (
			<div className="container">
				<nav id="AppNav">
				{
					 this.state.navs.map(item => (<div className="nav-item" key={item.name}>
					 <NavLink activeStyle={{ color: '#333', fontWeight: 'bold' }} key={item.name} to={item.path}>
						<Icon type={item.icon}/>
						<span>{item.text}</span>
						</NavLink>
					</div>
					))
				}
				</nav>
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/list" component={List} />
					<Route path="/listitem" component={Listitem} />
					<Route path="/itemsite" component={Itemsite} />
					<Route path="/show" component={Show} />
					<Route path="/rice" component={Rice} />
					<Route path="/mine" component={Mine} />
					<Redirect from="/" to="/home" />
				</Switch>
			</div>
		);
	}
}

App = withRouter(App);

export default App;
