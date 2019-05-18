import React, {useState, useEffect} from "react";
import { Box } from "gestalt";
import "gestalt/dist/gestalt.css";
import _ from 'lodash'

import Menu from "../components/common/Menu";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Login from "../components/login/Login";

import IntroContainer from '../containers/IntroContainer';
import SkillsContainer from '../containers/SkillsContainer';
import ProjectsContainer from '../containers/ProjectsContainer';
import WriteContainer from '../containers/WriteContainer';

const MainTemplate = ({match}) => {
  const menu = _.defaultTo(match.params.menu,'aboutme')
  const [isPopLogin, setIsPopLogin] = useState(false);

  const getContainer = (menu) => {
    switch(menu){
      case 'aboutme' : return <IntroContainer/>
      case 'skills' : return <SkillsContainer/>
      case 'projects' : return <ProjectsContainer/>
      case 'write' : return <WriteContainer/>
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

  const activeModal = () => {
    setIsPopLogin(true);
  }

  const deactiveModal = () => {
    setIsPopLogin(false);
  }

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
          <Menu active={menu} onHandlerClickLogin={() => activeModal()}/>
        </Box>
        <Box padding={2}>
          {getContainer(menu)}
        </Box>
        <Footer/>
      </Box>
      {isPopLogin && <Login onHandleClose={() => deactiveModal()}/>}
    </Box>
  );
};

export default MainTemplate;
