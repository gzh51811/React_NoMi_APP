import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
//引入不需要底部导航组件的路由
import Reg from './pages/Reg';
import Login from './pages/Login';
import Listitem from './pages/List/List2.jsx';
import Itemsite from './pages/List/List1.jsx';

import {HashRouter,Route,Switch} from 'react-router-dom';


let store = createStore((state = {

}, action) => {
    switch (action.type) {
        
        default:
        return state
    }
})

render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/reg" component={Reg} />
                <Route path="/login" component={Login}/>
                <Route path="/listitem" component={Listitem} />
				<Route path="/itemsite" component={Itemsite} />
                <Route path="/" component={App} />
            </Switch >
        </HashRouter>
    </Provider>
    , document.getElementById('root')
);

