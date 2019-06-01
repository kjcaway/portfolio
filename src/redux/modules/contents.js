import axios from "axios";
import update from "react-addons-update";

// Action
const LOAD = "contents/LOAD";
const SUCCESS = "contents/SUCCESS";
const FAIL = "contents/FAIL";

const CREATE = "contents/CREATE";
const DELETE = "contents/DELETE";

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

export function removeContent(seq) {
  return {
    type: DELETE
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
      })
      .catch(err => {
        console.log(err);
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
      })
      .catch(err => {
        console.log(err);
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
    case DELETE:
      return update(state, {
        status: { $set: "DELETE" }
      });
    default:
      return state;
  }
}

export default reducer;
