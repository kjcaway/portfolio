import React,  {Component} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Skill from '../components/skill/Skill';
import Spinner from '../components/common/Spinner';


class SkillContainer extends Component {

  componentDidMount(props){
    return this.props.getContents({
      category:'02',
    }).then(() => {
    })
  }

  render() {

    return (
      (this.props.contentsStatus === 'LOAD')?
      <Spinner/>
      :
      <Skill 
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillContainer);