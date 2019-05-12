import axios from "axios";
import update from "react-addons-update";

// action
const LOAD = "contents/LOAD";
const SUCCESS = "contents/SUCCESS";
const FAIL = "contents/FAIL";

export function loadContents(data) {
  return {
    type: LOAD
  };
}

export function success(data) {
  return {
    type: SUCCESS,
    data
  };
}

export function fail(error) {
  return {
    type: FAIL,
    error
  };
}


// api action
export function getContents(){
  return dispatch => {
    dispatch(loadContents());

    return axios.get('/api/contents/')
      .then(res => {
        console.log('[action] getContents...');
        dispatch(success(res.data.data)); // data는 {data : array}형태 
      })
      .catch(err => {
        console.log(err);
        dispatch(fail(err)); // data는 {data : array}형태 
      })
  }

}

//reducer --> export default
const initialState = {
  status: 'INIT',
  data: [],
  error: -1
};

function reducer(state=initialState, action) {
  switch(action.type){
    case LOAD:
      return update(state, {
        status : {$set : "LOAD"},
      })
    case SUCCESS:
      return update(state, {
        status : {$set : "SUCCESS"},
        data: {$set:action.data}
      })
    case FAIL:
      return update(state, {
        status : {$set : "FAIL"},
        error: {$set:action.err}
      })
    default:
      return state;
  }
}

export default reducer;