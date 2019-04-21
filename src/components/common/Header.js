import React, { Component } from "react";
import { Heading, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

class Header extends Component {
  render() {
    return (
      <Text align="center" bold>
        <Heading size="md" color="white">
          Portfolio
        </Heading>
      </Text>
    );
  }
}

export default Header;
