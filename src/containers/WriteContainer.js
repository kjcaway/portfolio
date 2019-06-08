import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Write from '../components/manage/Write';
import Unauthorized from '../components/error/Unauthorized';

import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

class WriteContainer extends Component {

  handlePost(data){
    data = _.assign(data, {
      writer: this.getUserName()
    });

    return this.props.setContents(data)
      .then(() => {
        console.log('write contents');
        document.location = '/manage';
      })
  }

  getUserName(){
    const cookies = new Cookies();
    const decoded = jwt.decode(cookies.get('token'), {complete: true});
    const name = _.defaultTo(decoded.payload.name,'Anonymous');

    return name;
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