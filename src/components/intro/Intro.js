import React from "react";
import {
  Box,
  Divider,
} from "gestalt";
import "gestalt/dist/gestalt.css";

import Item from './Item';

const Intro = (props) => {

  const renderItems = (data) => {
    return data.map((obj, idx) => {
      return (
        <div key={idx}>
          <Item data={obj} idx={idx}/>
          <Divider />
        </div>
      )
    })
  }
  return (
    <Box column={12} justifyContent="center">
      {renderItems(props.data)}
    </Box>
  );
};

export default Intro;
