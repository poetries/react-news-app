import * as ActionTypes from '../constants'
// todo
export default function(state = null, action) {
  switch(action.type) {
    case ActionTypes.LOGIN_SUCCESS:
          alert('登录成功');
          return Object.assign({},state,{data:action.data});
    default:
          return state;
  }
}
