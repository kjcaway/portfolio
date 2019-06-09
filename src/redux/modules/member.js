import axios from "axios";
import update from "react-addons-update";

// Action
const LOGIN = "LOGIN";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

const CHECK = "CHECK";
const CHECK_SUCCESS = "CHECK_SUCCESS";
const CHECK_FAIL = "CHECK_FAIL";

const LOGOUT = "LOGOUT";

export function login() {
  return {
    type: LOGIN
  };
}

export function success(token) {
  return {
    type: SUCCESS,
    token
  };
}

export function fail(error) {
  return {
    type: FAIL,
    error
  };
}

export function check() {
  return {
    type: CHECK
  };
}

export function checkSuccess() {
  return {
    type: CHECK_SUCCESS
  };
}

export function checkFail(error) {
  return {
    type: CHECK_FAIL,
    error
  };
}

export function removeToken(){
  return {
    type: LOGOUT
  }
}

// API action
export function getToken(userinfo){
  return dispatch => {
    dispatch(login());

    return axios.post('/api/member/signin', userinfo)
      .then(res => {
        console.log('[action] getToken...');
        if(res.code === 200){
          dispatch(success(res.data.token)); 
        } else {
          dispatch(fail(res.data.data)); 
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(fail(err));
      })
  }
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length === 2) return parts.pop().split(";").shift();
}


export function checkToken(){
  return dispatch => {
    dispatch(check());

    return axios.get('/api/member/check',
      {
        headers: {
          'x-access-token': getCookie('token')
        }
      })
      .then(res => {
        console.log('[action] checkToken...');
        if(res.data.data === "Valid token"){
          dispatch(checkSuccess()); 
        } else {
          dispatch(checkFail(res.data.data)); 
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(checkFail(err));
      })
  }
}


// Reducer
const initialState = {
  status: 'INIT',
  token: '',
  error: -1,
  isLogged: false
};

function reducer(state=initialState, action) {
  switch(action.type){
    case LOGIN:
      return update(state, {
        status : {$set : "WAITING"},
      })
    case SUCCESS:
      return update(state, {
        status : {$set : "SUCCESS"},
        token: {$set:action.token}
      })
    case FAIL:
      return update(state, {
        status : {$set : "FAIL"},
        error: {$set:action.error}
      })
    case CHECK:
      return update(state, {
        status : {$set : "WAITING"},
      })
    case CHECK_SUCCESS:
      return update(state, {
        status : {$set : "SUCCESS"},
        isLogged : {$set : true},
      })
    case CHECK_FAIL:
      return update(state, {
      status : {$set : "FAIL"},
      isLogged : {$set : false},
      error: {$set:action.error}
    })
    case LOGOUT:
      return update(state, {
      status : {$set : "SUCCESS"},
      isLogged : {$set : false},
    })
    default:
      return state;
  }
}

export default reducer;