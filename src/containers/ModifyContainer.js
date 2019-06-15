import React, { Component } from "react";

import Modify from '../components/manage/Modify';

class ModifyContainer extends Component {
  render() {
    return (
      <Modify onHandleClose={this.props.onHandleClose}/>
    );
  }
}

export default ModifyContainer;
