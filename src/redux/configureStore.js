import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from "react-router-redux";
import {createBrowserHistory} from "history";

import contents from "./modules/contents";
import member from "./modules/member";

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];

const reducer = combineReducers({
  contents,
  member,
  routing: routerReducer
});

const store = initialState => createStore(reducer, initialState, applyMiddleware(...middlewares));

export {history};

export default store();