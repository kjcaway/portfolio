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
        <Box column={2}>
          <Card image={<Avatar name="avatar" src={props.data.file_path}/>}>
            <Text align="center" bold size="xl">
              <Box paddingX={3} paddingY={2}>
              </Box>
            </Text>
            <Button
              accessibilityLabel="Infinity Stone"
              color="red"
              text="Infinity Stone"
              onClick={() => onClick(props)}
            />
          </Card>
        </Box>
        <Box padding={4} maxWidth={650} column={8}>
          <Heading size="sm" color="gray">
            {props.data.title}
          </Heading>
          <Text><div dangerouslySetInnerHTML={{__html: props.data.contents}}></div></Text>
        </Box>
      </Box>
    )
  }

  const rightView = () => {
    return (
      <Box display="flex" paddingY={4} alignItems="center" direction="row">
        <Box padding={4} flex="grow" maxWidth={650} column={8}>
          <Heading size="sm" color="gray">
          {props.data.title}
          </Heading>
          <Text><div dangerouslySetInnerHTML={{__html: props.data.contents}}></div></Text>
        </Box>
        <Box column={2}>
          <Card image={<Avatar name="Jongchan Kang" src={props.data.file_path}/>}>
            <Text align="center" bold size="xl">
              <Box paddingX={3} paddingY={2}>
              </Box>
            </Text>
            <Button
              accessibilityLabel="Infinity Stone"
              color="red"
              text="Infinity Stone"
              onClick={() => onClick(props)}
            />
          </Card>
        </Box>
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
