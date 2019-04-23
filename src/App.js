import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainTemplate from "./templates/MainTemplate";

import { Provider } from 'react-redux';
import configureStore from './store'
import reducers from './reducers'

const store = configureStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <>
            <Switch>
              <Route exact path="/" component={MainTemplate}></Route>
              <Route path="/:menu" component={MainTemplate}></Route>
            </Switch>
          </>
        </Router>
      </Provider>
    );
  }
}

export default App;
