import React from "react";
import {
  Box,
  Divider,
  Text,
  Container,
  Avatar,
  Heading
} from "gestalt";
import "gestalt/dist/gestalt.css";

const SkillsTemplate = () => {
  return (
    <Box column={12} justifyContent="center">
      <Container>
        <Box display="flex" direction="column" alignItems="center" paddingY={4}>
          <Heading size="sm" accessibilityLevel={2} color="darkGray">
            My Skills
          </Heading>
          <Heading size="xs" accessibilityLevel={3} color="gray">
            This is brlurlur
          </Heading>
        </Box>
      </Container>
      <Divider />
      <Container>
        <Box display="flex" marginTop={5} column={12} wrap={true}>
          <Box column={4} display="flex" direction="column" alignItems="center" padding={3} minHeight={200}>
            <Avatar
              name="Shanice"
              size="lg"
              src="/gestalt/static/media/shanice.2bbdc6c0.jpg"
              verified
            />
            <Text bold size='lg' italic>asdf</Text>
            <Text size='md'>asdf</Text>
          </Box>
          <Box column={4} display="flex" direction="column" alignItems="center" padding={3} minHeight={200}>
            <Avatar
              name="Shanice"
              size="lg"
              src="/gestalt/static/media/shanice.2bbdc6c0.jpg"
              verified
            />
            <Text bold size='lg' italic>asdf</Text>
            <Text size='md'>asdf</Text>
          </Box>
          <Box column={4} display="flex" direction="column" alignItems="center" padding={3} minHeight={200}>
            <Avatar
              name="Shanice"
              size="lg"
              src="/gestalt/static/media/shanice.2bbdc6c0.jpg"
              verified
            />
            <Text bold size='lg' italic>asdf</Text>
            <Text size='md'>asdf</Text>
          </Box>
          <Box column={4} display="flex" direction="column" alignItems="center" padding={3} minHeight={200}>
            <Avatar
              name="Shanice"
              size="lg"
              src="/gestalt/static/media/shanice.2bbdc6c0.jpg"
              verified
            />
            <Text bold size='lg' italic>asdf</Text>
            <Text size='md'>asdf</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsTemplate;
