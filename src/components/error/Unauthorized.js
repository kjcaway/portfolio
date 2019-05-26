import React from "react";
import { Box, Heading, Container } from "gestalt";
import "gestalt/dist/gestalt.css";

const Unauthorized = () => {
  return (
    <Container>
      <Box padding={3} shape="rounded" color="darkWash">
        <Heading size="sm" accessibilityLevel={2}>
          401
        </Heading>
        <Heading size="xs" accessibilityLevel={3}>
          Unauthorized.
        </Heading>
      </Box>
    </Container>
  );
};

export default Unauthorized;
