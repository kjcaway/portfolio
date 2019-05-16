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
  const onClick = () => {
    alert(props.data.url_link)
  }

  const leftView = () => {
    return (
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
    )
  }

  const rightView = () => {
    return (
      <Box display="flex" paddingY={4} alignItems="center" direction="row">
        <Box padding={4} flex="grow">
          <Heading size="sm" color="gray">
          {props.data.title}
          </Heading>
          <Text>{props.data.contents}</Text>
        </Box>
        <Card image={<Avatar name="Jongchan Kang" />}>
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
      </Box>
    )
  }
  
  const view = () => {
    if(Number(props.idx)%2 === 0){
      return leftView(props)
    } else{
      return rightView(props)
    }
  }

  return (
    <Container>
      {view()}
    </Container>
  );
};

export default Item;