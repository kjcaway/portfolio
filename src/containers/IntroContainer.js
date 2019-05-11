import React,  {useEffect, useState} from 'react'
import { connect } from "react-redux";
import * as contentActions from "../redux/modules/contents";
import Intro from '../components/intro/Intro';

const IntroContainer = (props) => {

  useEffect(() => {
    props.getContents().then(() => {
      
    })

  }, []);

  return (
    <Intro/>
  )
}

const mapStateToProps = (state) => {
  return {
    viewStatus: state.contents
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getContents: () => {
      return dispatch(contentActions.getContents());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IntroContainer);
