import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from "react-router-redux";
import {createBrowserHistory} from "history";

import contents from "./modules/contents";

const history = createBrowserHistory()

const middlewares = [thunk, routerMiddleware(history)];

const reducer = combineReducers({
  contents,
  routing: routerReducer
});

const store = initialState => createStore(reducer, initialState, applyMiddleware(...middlewares));

export {history};

export default store();