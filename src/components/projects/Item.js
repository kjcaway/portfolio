import React from "react";
import {
  Box,
  Sticky, 
  Text
} from "gestalt";
import "gestalt/dist/gestalt.css";


const Item = (props) => {
  
  return (
    <Box>
      <Sticky top={0}>
        <Box
          alignItems="center"
          color="transparentDarkGray"
          display="flex"
          height={40}
        >
          <Text bold color="white">
            {props.data.title}
          </Text>
        </Box>
      </Sticky>
      <Box marginTop={4} position="relative">
        <Text>
          {props.data.contents}
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
