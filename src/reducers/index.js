/**
 * 合并reducers
 */

import { combineReducers } from 'redux'
import doLogin from './doLogin';

const Reducers = {
  doLogin
}

export default combineReducers({
    ...Reducers
});
