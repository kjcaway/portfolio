import React from "react";
import { 
  Box, 
  Divider, 
  Container, 
  Heading 
} from "gestalt";
import "gestalt/dist/gestalt.css";

import Item from "./Item";

const Skill = props => {
  const renderItems = data => {
    return data.map((obj, idx) => {
      return (
        <Item data={obj} key={idx}/>
      );
    });
  };
  return (
    <Box column={12} justifyContent="center">
      <Container>
        <Box display="flex" direction="column" alignItems="center" paddingY={4}>
          <Heading size="sm" accessibilityLevel={2} color="darkGray">
            My Skills
          </Heading>
          <Heading size="xs" accessibilityLevel={3} color="gray">
            This is about My Skills
          </Heading>
        </Box>
      </Container>
      <Divider />
      <Container>
        <Box display="flex" marginTop={5} column={12} wrap={true}>
          {renderItems(props.data)}
        </Box>
      </Container>
    </Box>
  );
};

export default Skill;
