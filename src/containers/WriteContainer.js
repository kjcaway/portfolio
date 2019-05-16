import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Write from '../components/write/Write';

class WriteContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handlePost(contents){
    return this.props.setContents(contents)
      .then(() => {
        console.log('write contents')
      })
  }

  render() {
    return (
      <Write 
        onPost={this.handlePost.bind(this)}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contents: state.contents
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setContents: (contents) => {
      return dispatch(contentActions.setContents(contents));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WriteContainer);