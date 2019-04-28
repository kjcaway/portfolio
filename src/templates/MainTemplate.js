import React, {useEffect} from "react";
import { Box } from "gestalt";
import "gestalt/dist/gestalt.css";
import _ from 'lodash'

import Menu from "../components/common/Menu";
import Header from "../components/common/Header";

import IntroContainer from '../containers/IntroContainer';
import SkillsContainer from '../containers/SkillsContainer';
import ProjectsContainer from '../containers/ProjectsContainer';

const MainTemplate = ({match}) => {
  const menu = _.defaultTo(match.params.menu,'aboutme')

  const getContainer = (menu) => {
    switch(menu){
      case 'aboutme' : return <IntroContainer/>
      case 'skills' : return <SkillsContainer/>
      case 'projects' : return <ProjectsContainer/>
      default : return <IntroContainer/>
    }
  }

  const connectServer = () => {
    console.log('execute connect server...');
    fetch('/api/')
    .then(res => res.json())
    .then(data => console.log(data));
  }

  useEffect(() => {
    connectServer();
  }, []);

  return (
    <Box
      column={12}
      color="lightGray"
      display="flex"
      justifyContent="center"
      minHeight={1028}
    >
      <Box maxWidth={960} column={12} color="white" shape="rounded">
        <Box color="eggplant" shape="roundedTop">
          <Header />
          <Menu active={menu}/>
        </Box>
        <Box padding={2}>
          {getContainer(menu)}
        </Box>
      </Box>
    </Box>
  );
};

export default MainTemplate;
