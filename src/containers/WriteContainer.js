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
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  handlePost(data){
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('title', data.title);
    formData.append('contents', data.contents);
    formData.append('url_link', data.url_link);
    formData.append('category', data.category);
    formData.append('writer', this.getUserName());

    return this.props.setContent(formData)
      .then(() => {
        if(this.props.isSuccess === 'SUCCESS'){
          document.location = '/manage';
        } else{
          alert('Fail.')
        }
      })
  }

  handleFileInput(e){
    console.log(e.target.files[0])
    this.setState({
      selectedFile : e.target.files[0],
      loaded:0
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
          onHandleFileInput={this.handleFileInput.bind(this)}
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
    isSuccess: state.contents.status,
    isLogged : state.member.isLogged,
    status : state.member.status,
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setContent: (contents) => {
      return dispatch(contentActions.setContent(contents));
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);