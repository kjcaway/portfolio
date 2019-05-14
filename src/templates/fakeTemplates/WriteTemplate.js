import React from "react";
import {
  Box,
  Label,
  Text,
  TextField,
  TextArea,
  SelectList,
  Button
} from "gestalt";
import "gestalt/dist/gestalt.css";

const WriteTemplate = () => {
  const cityOptions = [
    {
      value: "01",
      label: "About Me"
    },
    {
      value: "02",
      label: "Skills"
    },
    {
      value: "03",
      label: "Projects"
    }
  ];

  return (
    <Box column={12} justifyContent="center">
      <Box>
        <Box margin={2}>
          <Label htmlFor="title">
            <Text>Title</Text>
          </Label>
        </Box>
        <TextField id="title" placeholder="Title" type="text" />

        <Box margin={2}>
          <Label htmlFor="contents">
            <Text>Contents</Text>
          </Label>
        </Box>
        <TextArea
          id="contents"
          placeholder="Write something about yourself..."
        />
        <Box margin={2}>
          <Label htmlFor="url_link">
            <Text>URL Link</Text>
          </Label>
        </Box>
        <TextField id="url_link" placeholder="URL Link" type="url" />

        <Box paddingY={2}>
          <Label htmlFor="category">
            <Text>Category</Text>
          </Label>
        </Box>
        <SelectList
          id="category"
          name="category"
          options={cityOptions}
          placeholder="Select Category"
        />
        <Box marginTop={2}>
          <Button color="red" text="Submit" type="submit" />
        </Box>
      </Box>
    </Box>
  );
};

export default WriteTemplate;
