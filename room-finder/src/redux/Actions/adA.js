import axios from 'axios';


export const POST_LOADGE_I = 'POST_LOADGE_RE';
export const POST_LOADGE_SUCC = 'POST_LOADGE_SUCC';
export const POST_LOADGE_FAIL = 'POST_LOADGE_FAIL';

export const postad = (obj) => dispatch => {
  dispatch({type: GET_LODGE_RE})
    axios
    .post("http://localhost:5000/api/users/u",obj)//console.log(data,'one')
    .then( response => dispatch({type:GET_LODGE_SUCC, payload: response.obj.data } )) 
    .catch( err => dispatch({type:GET_LODGE_FAIL, message: err  })) 
}
