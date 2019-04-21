import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainTemplate from "./templates/MainTemplate";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={MainTemplate}></Route>
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
