import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login'
import {HashRouter,Route,Switch} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
// 引入store
import store from './store';
// 引入react-redux 
import {Provider} from 'react-redux';

// ReactDOM.render(<App />, document.getElementById('root'));
render(
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/Login' component={Login}/>
                <Route path='/' component={App}/>
            </Switch>
        </HashRouter>
    </Provider>
    ,
    document.querySelector('#root')
)

serviceWorker.unregister();
