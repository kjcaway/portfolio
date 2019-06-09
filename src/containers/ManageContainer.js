import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Manage from '../components/manage/Manage';
import Unauthorized from '../components/error/Unauthorized';
import Spinner from '../components/common/Spinner';

class ManageContainer extends Component {

  componentDidMount(props){
    this.loadContents();
  }

  loadContents(){
    return this.props.getContents().then(() => {
      console.log(this.props.contents)
    })
  }

  handleAddClick(){
    document.location = '/manage/write';
  }

  handleDeleteClick(seq){
    return this.props.delContents(seq).then(() => {
      if(this.props.contentsStatus === 'SUCCESS'){
        console.log(`Delete content seq : ${seq}`);
        alert('Success');
        this.loadContents();
      }else{
        alert('Fail')
      }

    })
  }

  render() {
    const viewYN = (this.props.memberStatus !== 'INIT' && this.props.memberStatus !== 'WAITING');

    return (
      viewYN &&
      (
        this.props.isLogged?
        (
          (this.props.contentsStatus === 'LOAD')?
          <Spinner/>
          :
          <Manage 
          data={this.props.contentsData}
          onHandleAddClick={this.handleAddClick.bind(this)}
          onHandleDeleteClick={this.handleDeleteClick.bind(this)}
          />
        )
        :
        <Unauthorized/>
      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contentsData: state.contents.data,
    contentsStatus: state.contents.status,
    isLogged : state.member.isLogged,
    memberStatus : state.member.status,
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