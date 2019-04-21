import React from "react";
import { Heading, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const Header = () => {
  return (
    <Text align="center" bold>
      <Heading size="md" color="white">
        Portfolio
      </Heading>
    </Text>
  );
}

export default Header;
