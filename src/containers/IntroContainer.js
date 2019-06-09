import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Intro from '../components/intro/Intro';
import Spinner from '../components/common/Spinner';

class IntroContainer extends Component {

  componentDidMount(props){
    return this.props.getContents({
      category:'01',
    }).then(() => {
    })
  }

  render() {

    return (
      (this.props.contentsStatus === 'LOAD')?
      <Spinner/>
      :
      <Intro 
        data={this.props.contentsData}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contentsData: state.contents.data,
    contentsStatus: state.contents.status
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContents: (where) => {
      return dispatch(contentActions.getContents(where));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);