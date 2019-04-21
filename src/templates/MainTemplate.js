import React from "react";
import { Box } from "gestalt";
import "gestalt/dist/gestalt.css";

import Menu from "../components/common/Menu";
import Header from "../components/common/Header";

const MainTemplate = () => {
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
          <Menu />
        </Box>
        <Box padding={5}>
          contents
        </Box>
      </Box>
    </Box>
  );
};

export default MainTemplate;
