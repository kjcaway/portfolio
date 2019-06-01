import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Projects from '../components/projects/Projects';

class ProjectsContainer extends Component {

  componentDidMount(props){
    return this.props.getContents({
      category:'03',
    }).then(() => {
      console.log(this.props.contents)
    })
  }

  render() {
    return (
      <Projects 
        data={this.props.contents.data}
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
    getContents: (where) => {
      return dispatch(contentActions.getContents(where));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer);