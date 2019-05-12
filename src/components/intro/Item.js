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


const Item = (props) => {
  const onClick = (props) => {
    alert(props.data.url_link)
  }
  
  return (
    <Container>
      <Box display="flex" paddingY={4} alignItems="center" direction="row">
        <Card image={<Avatar name="avatar" />}>
          <Text align="center" bold size="xl">
            <Box paddingX={3} paddingY={2}>
              {props.data.writer}
            </Box>
          </Text>
          <Button
            accessibilityLabel="Go to Blog"
            color="red"
            text="Go to Blog"
            onClick={() => onClick(props)}
          />
        </Card>
        <Box padding={4}>
          <Heading size="sm" color="gray">
            {props.data.title}
          </Heading>
          <Text>{props.data.contents}</Text>
        </Box>
      </Box>
    </Container>
  );
};

export default Item;
