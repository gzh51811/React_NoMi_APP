import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';


import {HashRouter,BrowserRoutere} from 'react-router-dom';

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
            <App/>
        </HashRouter>
    </Provider>
    , document.getElementById('root')
);