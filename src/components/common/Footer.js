import React from "react";
import { Box, Text, Icon } from "gestalt";
import "gestalt/dist/gestalt.css";

const Footer = () => {
  return (
    <Box justifyContent="center" display="flex">
      <Box marginRight={1} padding={1}>
        <Icon icon="person" accessibilityLabel="Pin" color="darkGray" />
      </Box>
      <Text align="center">jongchan kang</Text>
    </Box>
  );
};

export default Footer;
