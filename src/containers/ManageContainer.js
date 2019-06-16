import React, { Component } from "react";
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Manage from "../components/manage/Manage";
import Unauthorized from "../components/error/Unauthorized";
import Spinner from "../components/common/Spinner";
import ModifyContainer from "./ModifyContainer";

class ManageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModifyModal: false,
      modifyTargetSeq: -1
    };
  }

  componentDidMount(props) {
    this.loadContents();
  }

  loadContents() {
    return this.props.getContents().then(() => {
      console.log(this.props.contents);
    });
  }

  handleAddClick() {
    document.location = "/manage/write";
  }

  handleDeleteClick(seq) {
    return this.props.delContents(seq).then(() => {
      if (this.props.contentsStatus === "SUCCESS") {
        console.log(`Delete content seq : ${seq}`);
        alert("Success");
        this.loadContents();
      } else {
        alert("Fail");
      }
    });
  }

  handleModifyClick(seq) {
    this.setState(prevState => ({
      showModifyModal: !prevState.showModifyModal,
      modifyTargetSeq: seq
    }), this.updateUrl);
  }

  updateUrl(){
    if(this.state.showModifyModal){
      this.props.history.push(`/manage/${this.state.modifyTargetSeq}`)
    } else{
      this.props.history.push(`/manage`)
    }
  }

  render() {
    const viewYN =
      this.props.memberStatus !== "INIT" &&
      this.props.memberStatus !== "WAITING";
    const { showModifyModal } = this.state;
    return (
      viewYN &&
      (this.props.isLogged ? (
        this.props.contentsStatus === "LOAD" ? (
          <Spinner />
        ) : (
          <>
            <Manage
              data={this.props.contentsData}
              onHandleAddClick={this.handleAddClick.bind(this)}
              onHandleDeleteClick={this.handleDeleteClick.bind(this)}
              onHandleModifyClick={this.handleModifyClick.bind(this)}
            />
            {showModifyModal && <ModifyContainer onHandleClose={this.handleModifyClick.bind(this)}/>}
          </>
        )
      ) : (
        <Unauthorized />
      ))
    );
  }
}

const mapStateToProps = state => {
  return {
    contentsData: state.contents.data,
    contentsStatus: state.contents.status,
    isLogged: state.member.isLogged,
    memberStatus: state.member.status
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContents: () => {
      return dispatch(contentActions.getContents());
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
    delContents: seq => {
      return dispatch(contentActions.delContents(seq));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageContainer);
