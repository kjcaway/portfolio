import axios from "axios";
import update from "react-addons-update";

// action
const LOAD = "contents/LOAD";

export function loadContents(data) {
  return {
    type: LOAD,
    data
  };
}


// api action
export function getContents(){
  return dispatch => {
    dispatch(loadContents());

    return axios.get('/api/contents/')
      .then(res => {
        console.log('[action] getContents...');
        dispatch(loadContents(res.data)); // data는 {data : array}형태 
      })
      .catch(err => {
        console.log(err);
      })
  }

}

//reducer --> export default
const initialState = {
  status: 'INIT',
  data: []
};

function reducer(state=initialState, action) {
  switch(action.type){
    case LOAD:
      return update(state, {
        status : {$set : "LOAD"},
        data: {$set:action.data}
      })
    default:
      return state;
  }
}

export default reducer;