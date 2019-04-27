import React from "react";
import {
  Box,
  Divider,
  Text,
  Container,
  Avatar,
  Card,
  Button,
  Heading
} from "gestalt";
import "gestalt/dist/gestalt.css";
import _ from "lodash";

import MyImage from "../statics/images/basket.jpg";

const IntroTemplate = () => {
  return (
    <Box column={12} justifyContent="center">
      <Container>
        <Box display="flex" paddingY={4} alignItems="center" direction="row">
          <Card image={<Avatar name="Jongchan Kang" src={MyImage} />}>
            <Text align="center" bold size="xl">
              <Box paddingX={3} paddingY={2}>
                JongChan Kang
              </Box>
            </Text>
            <Button
              accessibilityLabel="Go to Blog"
              color="red"
              text="Go to Blog"
            />
          </Card>
          <Box padding={4}>
            <Heading size="sm" color="gray">
              I am Web Developer.
            </Heading>
            <Text>jlwjeflkwjefkljwlekfjwlejf</Text>
            <Text>blurblurblur</Text>
            <Text>JJuJJu</Text>
          </Box>
        </Box>
      </Container>
      <Divider />
      <Container>
        <Box display="flex" paddingY={4} alignItems="center" direction="row">
          <Box padding={4} flex="grow">
            <Heading size="sm" color="gray">
              I am Web Developer.
            </Heading>
            <Text>jlwjeflkwjefkljwlekfjwlejf</Text>
            <Text>blurblurblur</Text>
            <Text>JJuJJu</Text>
          </Box>
          <Card image={<Avatar name="Jongchan Kang" src={MyImage} />}>
            <Text align="center" bold size="xl">
              <Box paddingX={3} paddingY={2}>
                JongChan Kang
              </Box>
            </Text>
            <Button
              accessibilityLabel="Go to Blog"
              color="red"
              text="Go to Blog"
            />
          </Card>
        </Box>
      </Container>
      <Divider />
    </Box>
  );
};

export default IntroTemplate;
