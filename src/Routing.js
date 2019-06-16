import React, { Component } from "react";
import {Router, Route, Switch} from 'react-router-dom';
import {history} from './redux/configureStore';

import IntroContainer from './containers/IntroContainer';
import SkillsContainer from './containers/SkillsContainer';
import ProjectsContainer from './containers/ProjectsContainer';
import WriteContainer from './containers/WriteContainer';
import ManageContainer from './containers/ManageContainer';

class Routing extends Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={IntroContainer}></Route>
            <Route path="/intro" component={IntroContainer}></Route>
            <Route path="/skills" component={SkillsContainer}></Route>
            <Route path="/projects" component={ProjectsContainer}></Route>
            <Route exact path="/manage" component={ManageContainer}></Route>
            <Route path="/manage/:seq" component={ManageContainer}></Route>
            <Route path="/manage/write" component={WriteContainer}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Routing;
