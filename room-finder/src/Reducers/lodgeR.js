// import axios from 'axios';

import {
 GET_LODGE_RE,
 GET_LODGE_SUCC,
 GET_LODGE_FAIL,
}  from '../Actions/lodgeA';

const initialState = {
 "name": [],
 loading:false,
 err:'',
 message:'',
};

export const lodge = (state = initialState, action) => {
  switch ( action.type) {
    case GET_LODGE_RE:
      return {
        ...state,
        loading:true,
        // name:[],
        err:'',
        message:'loading',
      };
    case GET_LODGE_SUCC:
      return {
        ...state,
        loading:false,
        name:action.name,
        err:'',
        message:'grabbing',
      };
    case GET_LODGE_FAIL:
      return {
        ...state,
        // name:'',
        err:action.message,
        message:'error did not receive data',
      }
    default:
      return state
  }
};