import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Manage from '../components/manage/Manage';
import Unauthorized from '../components/error/Unauthorized';

class ManageContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(props){
    return this.props.getContents().then(() => {
      console.log(this.props.contents)
    })
  }

  handleAddClick(){
    console.log('aa')
    document.location = '/write';
  }

  render() {
    return (
      this.props.isLogged?
      <Manage 
      data={this.props.contents.data}
      onHandleAddClick={this.handleAddClick.bind(this)}
      />
      :
      <Unauthorized/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.contents,
    isLogged : state.member.isLogged,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContents: () => {
      return dispatch(contentActions.getContents());
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageContainer);