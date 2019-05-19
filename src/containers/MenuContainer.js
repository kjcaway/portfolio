import React, { Component } from 'react'
import { connect } from "react-redux";
import Menu from "../components/common/Menu";
import * as memberActions from "../redux/modules/member";

class MenuContainer extends Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  componentDidMount(props){
    return this.props.checkToken().then(() => {
    })
  }

  handleLogout(){
    return null;
  }

  render() {
    return (
      <Menu 
        active={this.props.active}
        onHandlerClickLogin={this.props.onHandlerClickLogin}
        onHandlerClickLogout={this.handleLogout.bind(this)}
        isLogged={this.props.isLogged}
        status={this.props.status}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLogged : state.member.isLogged,
    status : state.member.status
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);