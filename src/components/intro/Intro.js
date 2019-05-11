import React from "react";
import {
  Box,
  Divider,
} from "gestalt";
import "gestalt/dist/gestalt.css";

import Item from './Item';

const Intro = () => {

  const renderItem = () => {
    return (
      <>
        <Item/>
        <Divider />
      </>
    )
  }
  return (
    <Box column={12} justifyContent="center">
      {renderItem()}
    </Box>
  );
};

export default Intro;
