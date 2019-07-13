import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as contentActions from "../redux/modules/contents";

import Modify from "../components/manage/Modify";
import Spinner from "../components/common/Spinner";

import Cookies from 'universal-cookie';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import * as Util from '../util/common'

class ModifyContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  componentDidMount(props){
    if(this.props.match.params.seq){
      this.loadContent();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.seq !== prevProps.match.params.seq) {
      this.loadContent();
    }
  }

  loadContent() {
    const {
      match: { params }
    } = this.props;

    return this.props
      .getContent({
        seq: params.seq
      })
      .then(() => {
        console.log(`Load Content ${params.seq}..`);
      });
  }

  handleFileInput(e){
    console.log(e.target.files[0])
    this.setState({
      selectedFile : e.target.files[0],
      loaded:0
    })
  }
  
  handlePut(data){
    const {
      match: { params }
    } = this.props;


    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    formData.append('title', data.title);
    formData.append('contents', Util.replaceTextarea(data.contents));
    formData.append('url_link', data.url_link);
    formData.append('category', data.category);
    formData.append('writer', this.getUserName());
    formData.append('seq', params.seq);
    formData.append('is_del_file', data.is_del_file);

    return this.props.modifyContent(formData)
      .then(() => {
        if(this.props.isSuccess === 'UPDATE_SUCCESS'){
          document.location = '/manage';
        } else{
          alert('Fail.')
        }
      })
  }

  handleDelChecked(checked){
    if(!checked){
      // uncheck delete attatched
      this.setState({
        selectedFile : null
      })
    }
  }

  getUserName(){
    const cookies = new Cookies();
    const decoded = jwt.decode(cookies.get('token'), {complete: true});
    const name = _.defaultTo(decoded.payload.name,'Anonymous');

    return name;
  }

  render() {
    return this.props.contentsStatus === "LOAD_ONE" ? (
      <Spinner />
    ) : (
      <Modify
        onHandleClose={this.props.onHandleClose}
        data={this.props.contentsData}
        onHandleFileInput={this.handleFileInput.bind(this)}
        onHandleDelChecked={this.handleDelChecked.bind(this)}
        onPut={this.handlePut.bind(this)}
      />
    );
  }
}


const mapStateToProps = state => {
  return {
    contentsData: state.contents.dataOne,
    contentsStatus: state.contents.status,
    isSuccess: state.contents.status,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContent: where => {
      return dispatch(contentActions.getContent(where));
    },
    modifyContent: content => {
      return dispatch(contentActions.modifyContent(content));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModifyContainer)
);
