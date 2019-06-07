import React from "react";
import {
  Box,
  Divider,
  Container,
  Heading
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
      <Container>
        <Box display="flex" direction="column" alignItems="center" paddingY={4}>
          <Heading size="sm" accessibilityLevel={2} color="darkGray">
            About Me
          </Heading>
          <Heading size="xs" accessibilityLevel={3} color="gray">
            I'm Iron man
          </Heading>
        </Box>
      </Container>
      <Divider />
      {renderItems(props.data)}
    </Box>
  );
};

export default Intro;
