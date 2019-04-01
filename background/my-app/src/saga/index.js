import {call,put,takeEvery,select,all} from 'redux-saga/effects';
import {getData} from '../service';

// saga捕获action创建函数后返回的action
function* addToMovie(action){
    try{
       
    }catch(err){

    }
    // 获取state
    let state = select(); //等效于store.getState()
}

// 合并方法
export default function* rootSaga(){
    yield all([addToMovie()])
}