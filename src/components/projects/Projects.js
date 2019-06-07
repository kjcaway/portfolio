import React from "react";
import { Box, Container, Heading } from "gestalt";
import "gestalt/dist/gestalt.css";

import Item from "./Item";

const Projects = props => {
  const renderItems = data => {
    return data.map((obj, idx) => {
      return <Item data={obj} key={idx} />;
    });
  };
  return (
    <Box column={12} justifyContent="center">
      <Container>
        <Box display="flex" direction="column" alignItems="center" paddingY={4}>
          <Heading size="sm" accessibilityLevel={2} color="darkGray">
            Projects
          </Heading>
          <Heading size="xs" accessibilityLevel={3} color="gray">
            Experience
          </Heading>
        </Box>
      </Container>
      <Box color="white" height={600} overflow="scrollY">
        <Box height={500}>{renderItems(props.data)}</Box>
      </Box>
    </Box>
  );
};

export default Projects;
