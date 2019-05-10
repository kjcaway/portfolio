import axios from "axios";

export const SET_CONTENTS = "SET_CONTENTS";

export function setContents(data) {
  return {
    type: SET_CONTENTS,
    contents: data
  };
}

export function getContents(){
  return dispatch => {
    dispatch(setContents());

    return axios.get('/api/contents/')
      .then(res => {
        console.log('getContents...');
        dispatch(setContents(res.data));
      })
      .catch(err => {
        console.log(err);
      })
  }

}