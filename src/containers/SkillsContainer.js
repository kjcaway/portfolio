import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Skill from '../components/skill/Skill';
import Spinner from '../components/common/Spinner';


class SkillContainer extends Component {

  componentDidMount(props){
    return this.props.getContents().then(() => {
      console.log(this.props.contents)
    })
  }

  render() {
    const status = this.props.contents.status;

    return (
      (status === 'LOAD')?
      <Spinner/>
      :
      <Skill 
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
    getContents: () => {
      return dispatch(contentActions.getContents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillContainer);