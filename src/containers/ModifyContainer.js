import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as contentActions from "../redux/modules/contents";

import Modify from "../components/manage/Modify";
import Spinner from "../components/common/Spinner";

class ModifyContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.match.params.seq !== prevProps.match.params.seq) {
      this.loadContent();
    }
  }

  loadContent() {
    const {
      match: { params }
    } = this.props;

    return this.props
      .getContent({
        seq: params.seq
      })
      .then(() => {
        console.log(`Load Content ${params.seq}..`);
      });
  }

  render() {
    return this.props.contentsStatus === "LOAD_ONE" ? (
      <Spinner />
    ) : (
      <Modify
        onHandleClose={this.props.onHandleClose}
        data={this.props.contentsData}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    contentsData: state.contents.dataOne,
    contentsStatus: state.contents.status
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContent: where => {
      return dispatch(contentActions.getContent(where));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModifyContainer)
);
