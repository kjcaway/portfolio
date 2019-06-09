import axios from "axios";
import update from "react-addons-update";

// Action
const LOAD = "LOAD";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

const CREATE = "CREATE";
const CREATE_SUCCESS = "CREATE_SUCCESS";
const CREATE_FAIL = "CREATE_FAIL";

const DELETE = "DELETE";
const DELETE_SUCCESS = "DELETE_SUCCESS";
const DELETE_FAIL = "DELETE_FAIL";


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

export function createContents() {
  return {
    type: CREATE
  };
}
export function createSuccess() {
  return {
    type: CREATE_SUCCESS,
  };
}

export function createFail(error) {
  return {
    type: CREATE_FAIL,
    error
  };
}
export function removeContent(seq) {
  return {
    type: DELETE
  };
}
export function removeSuccess() {
  return {
    type: DELETE_SUCCESS,
  };
}

export function removeFail(error) {
  return {
    type: DELETE_FAIL,
    error
  };
}

// API action
export function getContents(where = {}) {
  return dispatch => {
    dispatch(loadContents());

    return axios
      .get("/api/contents/", {
        params: {
          where: where
        }
      })
      .then(res => {
        console.log("[action] getContents...");
        dispatch(success(res.data.data)); // res.data는 {data : array}형태
      })
      .catch(err => {
        console.log(err);
        dispatch(fail(err));
      });
  };
}

export function setContents(contents) {
  return dispatch => {
    dispatch(createContents());
    return axios
      .post("/api/contents/", contents)
      .then(res => {
        console.log("[action] setContents...");
        dispatch(createSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(createFail()); 
      });
  };
}

export function delContents(seq) {
  return dispatch => {
    dispatch(removeContent(seq));
    console.log(seq);
    return axios
      .delete(`/api/contents/${seq}`)
      .then(res => {
        console.log("[action] delContents...");
        dispatch(removeSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(removeFail());
      });
  };
}

// Reducer
const initialState = {
  status: "INIT",
  data: [],
  error: -1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD:
      return update(state, {
        status: { $set: "LOAD" }
      });
    case SUCCESS:
      return update(state, {
        status: { $set: "SUCCESS" },
        data: { $set: action.data }
      });
    case FAIL:
      return update(state, {
        status: { $set: "FAIL" },
        error: { $set: action.err }
      });
    case CREATE:
      return update(state, {
        status: { $set: "CREATE" }
      });
    case CREATE_SUCCESS:
      return update(state, {
        status: { $set: "SUCCESS" }
      });
    case CREATE_FAIL:
      return update(state, {
        status: { $set: "FAIL" },
        error: { $set: action.err }
      });
    case DELETE:
      return update(state, {
        status: { $set: "DELETE" }
      });
    case DELETE_SUCCESS:
      return update(state, {
        status: { $set: "SUCCESS" }
      });
    case DELETE_FAIL:
      return update(state, {
        status: { $set: "FAIL" },
        error: { $set: action.err }
      });
    default:
      return state;
  }
}

export default reducer;
