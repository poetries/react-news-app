import { applyMiddleware, createStore } from 'redux';
import reducer from '../reducers';
import logger from 'redux-logger';

// 创建store 用来存储状态
export const store = createStore(
  reducer,
  applyMiddleware(logger) //处理日志中间件
)
