import React, {useState} from "react";
import { Box } from "gestalt";
import "gestalt/dist/gestalt.css";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import LoginContainer from './containers/LoginContainer';
import MenuContainer from './containers/MenuContainer';
import Routing from "./Routing";

const App = () => {
  const [isPopLogin, setIsPopLogin] = useState(false);

  const activeModal = () => {
    setIsPopLogin(true);
  }

  const inActiveModal = () => {
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
          <MenuContainer onHandlerClickLogin={() => activeModal()}/>
        </Box>
        <Box padding={2}>
          <Routing/>
        </Box>
        <Footer/>
      </Box>
      {isPopLogin && <LoginContainer onHandleClose={() => inActiveModal()}/>}
    </Box>
  );
};

export default App;
