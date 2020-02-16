import axios from 'axios';

export const GET_PLACE = 'GET_PLACE';
export const GOT_PLACE = 'GOT_PLACE';
export const FAIL_PLACE = 'FAIL_PLACE';

export const getInfo = () => dispatch => {
  dispatch({type:GET_PLACE})
  axios 
    .get("http://localhost:5000/api/users/u")//http://localhost:5000/api/users/u
    .then( response => dispatch({type:GOT_PLACE,payload:response.data,status:response.status,message:"recived"}) )
    .catch( err => dispatch({type: FAIL_PLACE,payload:err,message:"failed/error"} ) ) 
}
