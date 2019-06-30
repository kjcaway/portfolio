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

const LOAD_ONE = "LOAD_ONE";
const LOAD_ONE_SUCCESS = "LOAD_ONE_SUCCESS";
const LOAD_ONE_FAIL = "LOAD_ONE_FAIL";

const UPDATE = "UPDATE";
const UPDATE_SUCCESS = "UPDATE_SUCCESS";
const UPDATE_FAIL = "UPDATE_FAIL";

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
    type: CREATE_SUCCESS
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
    type: DELETE_SUCCESS
  };
}

export function removeFail(error) {
  return {
    type: DELETE_FAIL,
    error
  };
}

export function loadContentOne(data) {
  return {
    type: LOAD_ONE
  };
}

export function loadContentOneSuccess(data) {
  return {
    type: LOAD_ONE_SUCCESS,
    data
  };
}

export function loadContentOneFail(error) {
  return {
    type: LOAD_ONE_FAIL,
    error
  };
}

export function updateContent() {
  return {
    type: UPDATE
  };
}
export function updateSuccess() {
  return {
    type: UPDATE_SUCCESS
  };
}

export function updateFail(error) {
  return {
    type: UPDATE_FAIL,
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

export function setContent(contents) {
  return dispatch => {
    dispatch(createContents());
    return axios
      .post("/api/contents/", contents)
      .then(res => {
        console.log("[action] setContent...");
        dispatch(createSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(createFail());
      });
  };
}

export function delContent(seq) {
  return dispatch => {
    dispatch(removeContent(seq));
    console.log(seq);
    return axios
      .delete(`/api/contents/${seq}`)
      .then(res => {
        console.log("[action] delContent...");
        dispatch(removeSuccess());
      })
      .catch(err => {
        console.log(err);
        dispatch(removeFail());
      });
  };
}

export function getContent(where = {}) {
  return dispatch => {
    dispatch(loadContentOne());

    return axios
      .get("/api/contents/", {
        params: {
          where: where
        }
      })
      .then(res => {
        console.log("[action] getContent...");
        if (res.data.data.length === 1) {
          dispatch(loadContentOneSuccess(res.data.data[0])); // res.data는 {data : array}형태
        } else {
          dispatch(loadContentOneFail(res.err));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(loadContentOneFail(err));
      });
  };
}

export function modifyContent(content) {
  return dispatch => {
    dispatch(updateContent(content));

    return axios
      .put("/api/contents/", content)
      .then(res => {
        console.log("[action] modifyContent...");
        dispatch(updateSuccess()); 
      })
      .catch(err => {
        console.log(err);
        dispatch(updateFail(err));
      });
  };
}


// Reducer
const initialState = {
  status: "INIT",
  data: [],
  error: -1,
  dataOne: {}
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
    case LOAD_ONE:
      return update(state, {
        status: { $set: "LOAD_ONE" }
      });
    case LOAD_ONE_SUCCESS:
      return update(state, {
        status: { $set: "LOAD_ONE_SUCCESS" },
        dataOne: { $set: action.data }
      });
    case LOAD_ONE_FAIL:
      return update(state, {
        status: { $set: "LOAD_ONE_FAIL" },
        error: { $set: action.err }
      });
    case UPDATE:
      return update(state, {
        status: { $set: "UPDATE" }
      });
    case UPDATE_SUCCESS:
      return update(state, {
        status: { $set: "UPDATE_SUCCESS" }
      });
    case UPDATE_FAIL:
      return update(state, {
        status: { $set: "UPDATE_FAIL" },
        error: { $set: action.err }
      });
    default:
      return state;
  }
}

export default reducer;
