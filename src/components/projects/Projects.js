import React from "react";
import { 
  Box
} from "gestalt";
import "gestalt/dist/gestalt.css";

import Item from "./Item";

const Projects = props => {
  const renderItems = data => {
    return data.map((obj, idx) => {
      return (
        <Item data={obj} key={idx}/>
      );
    });
  };
  return (
    <Box color="white" height={600} overflow="scrollY">
      <Box height={500}>
        {renderItems(props.data)}
      </Box>
    </Box>
  );
};

export default Projects;
