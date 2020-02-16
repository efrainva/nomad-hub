import {  GET_PLACE ,
  GOT_PLACE, 
  FAIL_PLACE,  }  from '../Actions/lodgeA';

const initialState = {
  name:[],
  isFetching:false,
  error:null,
  message:"",
  status:null,
};

export const lodge = (state = initialState, action) => {
  switch (action.type) {
    case GET_PLACE:
      return {
        ...state,
        isFetching:true,
        state:action.stat,
        message:"loading"
      }
    case FAIL_PLACE:
      return {
        ...state,
        name:[],
        err:action.payload,
        message:action.message
        }
    case GOT_PLACE:
      return {
        ...state,
        name:action.payload,
        isFetching:false,
        message:'recived'
      }
    default: 
    return state;
  } 
}

