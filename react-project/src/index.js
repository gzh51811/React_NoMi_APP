import React,{Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

// class Index extends Component{
//     render(){
//         return <Provider store={store}>
//         <HashRouter>
//             <App/>

//         </HashRouter>
//     </Provider>
//     , document.getElementById('root')
//     }
// }


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