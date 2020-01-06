import axios from 'axios';

export const GET_LODGE_RE = 'GET_LODGE_RE';
export const GET_LODGE_SUCC = 'GET_LODGE_SUCC';
export const GET_LODGE_FAIL = 'GET_LODGE_FAIL';

export const UPDATE_LOADGE_I = 'UPDATE_LOADGE_RE';
export const UPDATE_LOADGE_SUCC = 'UPDATE_LOADGE_SUCC';
export const UPDATE_LOADGE_FAIL = 'UPDATE_LOADGE_FAIL';

// export const DELETE_LOADGE_RE = 'DELETE_LOADGE_RE';
// export const DELETE_LOADGE_SUCC = 'DELETE_LOADGE_SUCC';
// export const DELETE_LOADGE_FAIL = 'DELETE_LOADGE_FAIL';

export const getInfo = () => dispatch => {
  dispatch({type: GET_LODGE_RE})
  return axios
    .get("http://localhost:5000/api/users/u",)//console.log(data,'one')
    .then( response => dispatch({type:GET_LODGE_SUCC, name: response.data } )) 
    .catch( err => dispatch({type:GET_LODGE_FAIL, message: err  })) 
}

export const updateInfo = (id) => dispatch => {
  dispatch({type: GET_LODGE_RE})
    axios
    .put("http://localhost:5000/api/users/{id}",)//console.log(data,'one')
    .then( response => dispatch({type:GET_LODGE_SUCC, name: response.data } )) 
    .catch( err => dispatch({type:GET_LODGE_FAIL, message: err  })) 
}

export const deleteInfo = (id) => dispatch => {
  dispatch({type: GET_LODGE_RE})
    axios
    .delete("http://localhost:5000/api/users/{id}",)//console.log(data,'one')
    .then( response => dispatch({type:GET_LODGE_SUCC, name: response.data } )) 
    .catch( err => dispatch({type:GET_LODGE_FAIL, message: err  })) 
}

// export const getNames = (item) => {
//   return {
//     type: GET_LODGE_SUCC,
//     item
//   }
// };


// export const getInfo = (url,props) => {
//   return (dispatch) => {
//     return axios.get("http://localhost:5000/api/users/u")
//       .then(response => {
//         dispatch(getNames(response.data))
//       })
//       .catch(error => {
//         throw(error);
//       });
//   };
// };



// export default getInfo;