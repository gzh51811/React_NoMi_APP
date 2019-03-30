import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';


import {HashRouter,BrowserRoutere} from 'react-router-dom';
render(
    <HashRouter>
        <App/>
    </HashRouter>
    , document.getElementById('root')
);