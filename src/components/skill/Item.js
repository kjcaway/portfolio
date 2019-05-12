import React from "react";
import {
  Box,
  Text,
  Avatar,
} from "gestalt";
import "gestalt/dist/gestalt.css";


const Item = (props) => {
  
  return (
    <Box column={4} display="flex" direction="column" alignItems="center" padding={3} minHeight={200}>
      <Avatar
        name="Shanice"
        size="lg"
        src="/gestalt/static/media/shanice.2bbdc6c0.jpg"
        verified
      />
      <Text bold size='lg' italic>{props.data.title}</Text>
      <Text size='md'>{props.data.contents}</Text>
    </Box>
  );
};

export default Item;
