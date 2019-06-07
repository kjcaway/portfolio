import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "../components/common/Menu";
import * as memberActions from "../redux/modules/member";
import Cookies from "universal-cookie";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: "",
    };
  }

  componentDidMount(props) {
    this.setState({
      active: this.getActiveMenu()
    })

    this.loadMenu();
  }

  loadMenu() {
    return this.props.checkToken().then(() => {});
  }

  getActiveMenu(){
    const path = window.location.pathname;
    const menu = path.split('/')[1];
    return menu === ''?'intro':menu;
  }

  handleLogout() {
    const cookies = new Cookies();
    cookies.remove("token");
    return this.props.removeToken();
  }

  render() {
    return (
      <Menu
        active={this.state.active}
        onHandlerClickLogin={this.props.onHandlerClickLogin}
        onHandlerClickLogout={this.handleLogout.bind(this)}
        isLogged={this.props.isLogged}
        status={this.props.status}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.member.isLogged,
    status: state.member.status
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
    removeToken: () => {
      return dispatch(memberActions.removeToken());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuContainer);
