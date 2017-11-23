/**
 * 定义action creator
 */

import * as actionType from '../constants';

// todo
// const doLoggin = ()=> (dispatch, getState) =>{
//    alert(getState())
//     dispatch({
//       type:actionType.LOGIN_SUCCESS,
//       data:'weqddsada'
//     })
// }

const doLoggin = {
     type:actionType.LOGIN_SUCCESS,
     data:'weqddsada'
}

export default doLoggin;
