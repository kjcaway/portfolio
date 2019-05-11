import React from "react";
import {
  Box,
  Text,
  Container,
  Avatar,
  Card,
  Button,
  Heading
} from "gestalt";
import "gestalt/dist/gestalt.css";


const Item = () => {
  return (
    <Container>
      <Box display="flex" paddingY={4} alignItems="center" direction="row">
        <Card image={<Avatar name="Jongchan Kang" />}>
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
  );
};

export default Item;
