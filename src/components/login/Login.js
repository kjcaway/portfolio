import React, {useState} from "react";
import {
  Box,
  Text,
  Modal,
  Button,
  Divider,
  Column,
  Label,
  TextField
} from "gestalt";
import "gestalt/dist/gestalt.css";

const Login = props => {
  const [userid, setUserid] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Modal
      accessibilityCloseLabel="close"
      accessibilityModalLabel="Login"
      heading="Login"
      onDismiss={() => props.onHandleClose()}
      footer={
        <Box
          justifyContent="between"
          display="flex"
          direction="row"
          marginLeft={-1}
          marginRight={-1}
        >
          <Box column={12} paddingX={1}>
            <Box
              display="flex"
              direction="row"
              justifyContent="end"
              marginLeft={-1}
              marginRight={-1}
            >
              <Box paddingX={1}>
                <Button
                  text="Cancel"
                  inline
                  onClick={() => props.onHandleClose()}
                />
              </Box>
              <Box paddingX={1}>
                <Button color="red" inline text="Login" 
                  onClick={() => props.onHandlePost({userid, password})}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      }
      size="md"
    >
      <Box display="flex" direction="row" position="relative">
        <Column span={12}>
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="userid">
                <Text align="left" bold>
                  ID
                </Text>
              </Label>
            </Column>
            <Column span={8}>
              <TextField id="userid" onChange={(e) => setUserid(e.value)} />
            </Column>
          </Box>
          <Divider />
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="password">
                <Text align="left" bold>
                  PASSWORD
                </Text>
              </Label>
            </Column>
            <Column span={8}>
              <TextField type="password" id="password" onChange={(e) => setPassword(e.value)} />
            </Column>
          </Box>
          <Divider />
        </Column>
      </Box>
    </Modal>
  );
};

export default Login;
