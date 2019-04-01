import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
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
            <App />
        </HashRouter>
    </Provider>
    ,
    document.querySelector('#root')
)

serviceWorker.unregister();
