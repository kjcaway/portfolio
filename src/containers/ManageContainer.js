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
    this.loadContents();
  }

  loadContents(){
    return this.props.getContents().then(() => {
      console.log(this.props.contents)
    })
  }

  handleAddClick(){
    document.location = '/write';
  }

  handleDeleteClick(seq){
    return this.props.delContents(seq).then(() => {
      console.log(`Delete content seq : ${seq}`);
      this.loadContents();
    })
  }

  render() {
    return (
      this.props.isLogged?
      <Manage 
      data={this.props.contents.data}
      onHandleAddClick={this.handleAddClick.bind(this)}
      onHandleDeleteClick={this.handleDeleteClick.bind(this)}
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
    delContents: (seq) => {
      return dispatch(contentActions.delContents(seq));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageContainer);