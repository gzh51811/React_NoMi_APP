import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

// 高阶组件
export default (Com)=>{
    return function(props,context){
        return <Com axios={axios} {...props} {...context} />
    }
}