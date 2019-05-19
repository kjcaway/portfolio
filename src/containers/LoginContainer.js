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
        if(this.props.loginError){
          alert("잘못된 ID 또는 PASSWORD 입니다.")
        } else{
          this.props.onHandleClose();
          this.props.checkToken();
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
    loginError : state.member.error
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