import React, { Component } from 'react';

import Home from './pages/Home';
import List from './pages/List';
import Show from './pages/Show';
import Rice from './pages/Rice';
import Mine from './pages/Mine';

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
			current: 'Home'
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
<<<<<<< HEAD
					 this.state.navs.map(item => (<div className="nav-item"  key={item.name}>
					 <NavLink activeStyle={{ color: '#333', fontWeight: 'bold' }} to={item.path}>
=======
					 this.state.navs.map(item => (<div className="nav-item" key={item.name}>
					 <NavLink activeStyle={{ color: '#333', fontWeight: 'bold' }} key={item.name} to={item.path}>
>>>>>>> 027d1ed1c2bb19b5fdbb715c6973f1b7f675aa3c
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
