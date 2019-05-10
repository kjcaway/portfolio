import * as Action from "../actions/Action";
import update from "react-addons-update";

const initialState = {};

export default function Reducer(state=initialState, action) {
  switch(action.type){
    case Action.SET_CONTENTS:
      return update(state, {
        
      })
    default:
      return state;
  }
}