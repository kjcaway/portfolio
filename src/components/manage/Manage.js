import React from "react";
import { Box, Container, Text, Button } from "gestalt";
import "gestalt/dist/gestalt.css";

const Manage = props => {

  const convertCtgToMenu = (code) => {
    switch(code){
      case '01' : return 'AboutMe';
      case '02' : return 'Skills';
      case '03' : return 'Projects';
      default : return 'None'
    }
  }
  const contentsItems = data_arr => {
    return data_arr.map((obj, idx) => {
      return (
        <Box
          alignItems="center"
          direction="row"
          display="flex"
          marginStart={-1}
          marginEnd={-1}
          marginBottom={2}
          key={idx}
          color="darkWash"
          shape="rounded"
        >
          <Box paddingX={1} color="lightGray" shape="rounded">
            <Text size="lg" bold color="darkGray">{convertCtgToMenu(obj.category)}</Text>
          </Box>
          <Box paddingX={1} flex="grow">
            <Text bold>{obj.title}</Text>
            <Text>{obj.contents}</Text>
          </Box>
          <Box paddingX={1}>
            <Button text="Modify" size="sm" color="gray" onClick={() => props.onHandleModifyClick(obj.seq)}/>
          </Box>
          <Box paddingX={1}>
            <Button text="Delete" size="sm" color="red" onClick={() => props.onHandleDeleteClick(obj.seq)}/>
          </Box>
        </Box>
      );
    });
  };

  return (
    <Container>
      <Box
          alignItems="center"
          direction="row"
          display="flex"
          marginStart={-1}
          marginEnd={-1}
          marginBottom={3}
          color="lightGray"
          shape="rounded"
        >
          <Box paddingX={1} shape="rounded">
            <Text size="lg" bold color="gray">Category</Text>
          </Box>
          <Box paddingX={1} flex="grow">
            <Text bold color="gray">Title / Contents</Text>
          </Box>
          <Box paddingX={1}>
            <Button text="Add" size="sm" color="blue" onClick={() => props.onHandleAddClick()}/>
          </Box>
        </Box>
      {contentsItems(props.data)}
    </Container>
  );
};

export default Manage;
