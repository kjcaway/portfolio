import React, { useState } from "react";
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

const Write = props => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [url_link, setUrl_link] = useState("");
  const [category, setCategory] = useState("01");

  const categoryOptions = [
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
            <Text bold color="darkGray">Title</Text>
          </Label>
        </Box>
        <TextField
          id="title"
          placeholder="Title"
          type="text"
          value={title}
          onChange={e => {
            setTitle(e.value);
          }}
        />

        <Box margin={2}>
          <Label htmlFor="contents">
            <Text bold color="darkGray">Contents</Text>
          </Label>
        </Box>
        <TextArea
          id="contents"
          placeholder="Write something about yourself..."
          value={contents}
          onChange={e => {
            setContents(e.value);
          }}
        />
        <Box margin={2}>
          <Label htmlFor="url_link">
            <Text bold color="darkGray">URL Link</Text>
          </Label>
        </Box>
        <TextField
          id="url_link"
          placeholder="URL Link"
          type="url"
          value={url_link}
          onChange={e => {
            setUrl_link(e.value);
          }}
        />

        <Box paddingY={2}>
          <Label htmlFor="category">
            <Text bold color="darkGray">Category</Text>
          </Label>
        </Box>
        <SelectList
          id="category"
          name="category"
          options={categoryOptions}
          placeholder="Select Category"
          value={category}
          onChange={e => {
            setCategory(e.value);
          }}
        />
        <Box paddingY={2}>
          <Label htmlFor="file">
            <Text bold color="darkGray">Image Upload</Text>
          </Label>
        </Box>
        <Box>
          <input type="file" name="file" onChange={e => props.onHandleFileInput(e)}/>
        </Box>
        <Box marginTop={5}>
          <Button
            color="red"
            text="Submit"
            type="submit"
            onClick={e => {
              props.onPost({
                title: title,
                contents: contents,
                url_link: url_link,
                category: category
              });
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Write;
