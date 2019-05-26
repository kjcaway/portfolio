import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import * as memberActions from "../redux/modules/member";

import Write from '../components/write/Write';
import Unauthorized from '../components/error/Unauthorized';

class WriteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(props){
    return this.props.checkToken().then(() => {
    })
  }

  handlePost(contents){
    return this.props.setContents(contents)
      .then(() => {
        console.log('write contents')
      })
  }

  render() {
    return (
      this.props.isLogged?
      <Write 
        onPost={this.handlePost.bind(this)}
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
    setContents: (contents) => {
      return dispatch(contentActions.setContents(contents));
    },
    checkToken: () => {
      return dispatch(memberActions.checkToken());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);