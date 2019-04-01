import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers';
import rootSaga from './saga';

import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

// 1.创建中间件
const sagaMiddleware = createSagaMiddleware();
// 合并中间件
let middleware = compose(applyMiddleware(sagaMiddleware),composeWithDevTools());

// 创建一个store
// 2.将sagaMiddleware连接至store
let store = createStore(rootReducer,middleware);

// 3.运行saga配置
sagaMiddleware.run(rootSaga);

export default store;