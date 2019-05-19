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
      console.log('checking token for menu view')
    })
  }

  render() {
    return (
      <Menu 
        active={this.props.active}
        onHandlerClickLogin={this.props.onHandlerClickLogin}
        isLogged={this.props.member.isLogged}
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
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer);