import React from "react";
import { Box, Text, Icon, Sticky } from "gestalt";
import "gestalt/dist/gestalt.css";

const Footer = () => {
  return (
    <Sticky bottom={0}>
      <Box justifyContent="center" display="flex">
        <Box marginRight={1} padding={1}>
          <Icon icon="person" accessibilityLabel="Pin" color="darkGray" />
        </Box>
        <Text align="center">jongchan kang</Text>
      </Box>
    </Sticky>
  );
};

export default Footer;
