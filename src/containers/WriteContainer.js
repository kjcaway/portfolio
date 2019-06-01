import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Write from '../components/write/Write';
import Unauthorized from '../components/error/Unauthorized';

class WriteContainer extends Component {

  handlePost(contents){
    return this.props.setContents(contents)
      .then(() => {
        console.log('write contents');
        document.location = '/manage';
      })
  }

  render() {
    const viewYN = (this.props.status !== 'INIT' && this.props.status !== 'WAITING');

    return (
      viewYN &&
      (
        this.props.isLogged?
        <Write 
          onPost={this.handlePost.bind(this)}
        />
        :
        <Unauthorized/>

      )
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.contents,
    isLogged : state.member.isLogged,
    status : state.member.status,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setContents: (contents) => {
      return dispatch(contentActions.setContents(contents));
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);