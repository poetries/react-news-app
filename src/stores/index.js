import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

// 创建store 用来存储状态
export default createStore(
  reducer,
  applyMiddleware(reduxThunk,logger) //处理日志中间件
)
