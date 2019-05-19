import React, { Component } from 'react'
import { connect } from "react-redux";
import Login from "../components/login/Login";
import * as memberActions from "../redux/modules/member";

class LoginContainer extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  handlePost(userinfo){
    return this.props.getToken(userinfo)
      .then(() => {
        console.log('request token')
        if(this.props.member.error){
          alert("잘못된 ID 또는 PASSWORD 입니다.")
        } else{
          this.props.onHandleClose();
        }
      })
  }

  render() {
    return (
      <Login 
        onHandleClose={this.props.onHandleClose}
        onHandlePost={this.handlePost.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    member : state.member
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getToken: (userinfo) => {
      return dispatch(memberActions.getToken(userinfo));
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());

    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);