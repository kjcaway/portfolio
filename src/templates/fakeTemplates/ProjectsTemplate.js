import React from "react";
import { Box, Sticky, Text } from "gestalt";
import "gestalt/dist/gestalt.css";

const ProjectsContainer = () => {
  return (
    <Box color="white" height={200} overflow="scrollY">
      <Box height={500}>
        <Box>
          <Sticky top={0}>
            <Box
              alignItems="center"
              color="transparentDarkGray"
              display="flex"
              height={40}
            >
              <Text bold color="white">
                This should stick
              </Text>
            </Box>
          </Sticky>
          <Box marginTop={4} position="relative">
            <Text>
              ascascascascascascasc<br/>sdcsdcsdc<br/>sdcsdcsdcsdcsdc<br/>sdcsdcsdcsdcsdv
            </Text>
            <Text>Keep scrolling</Text>
            <Text>Scroll more</Text>
          </Box>
        </Box>
        <Box>
          <Sticky top={0}>
            <Box
              alignItems="center"
              color="transparentDarkGray"
              display="flex"
              height={40}
            >
              <Text bold color="white">
                This should also stick
              </Text>
            </Box>
          </Sticky>
          <Box marginTop={4}>
            <Text>
              ascascascascascascasc<br/>sdcsdcsdc<br/>sdcsdcsdcsdcsdc<br/>sdcsdcsdcsdcsdv
            </Text>
            <Text>Still scrolling</Text>
            <Text>Tadaaaaa</Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsContainer;
