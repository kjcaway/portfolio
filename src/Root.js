import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import MainTemplate from "./templates/MainTemplate";
import {history} from './redux/configureStore';


class Root extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={MainTemplate}></Route>
            <Route path="/:menu" component={MainTemplate}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Root;
