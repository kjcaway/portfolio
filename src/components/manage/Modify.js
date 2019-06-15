import React, { useState } from "react";
import {
  Box,
  Modal,
  Text,
  Button,
  Column,
  Label,
  Divider,
  TextField,
  TextArea,
  SelectList
} from "gestalt";
import "gestalt/dist/gestalt.css";

const Modify = props => {
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
    <Modal
      accessibilityCloseLabel="close"
      accessibilityModalLabel="Edit"
      heading="Edit your content"
      onDismiss={() => props.onHandleClose(-1)}
      footer={
        <Box
          justifyContent="between"
          display="flex"
          direction="row"
          marginLeft={-1}
          marginRight={-1}
        >
          <Box column={6} paddingX={1}>
            <Button text="Delete content" inline />
          </Box>
          <Box column={6} paddingX={1}>
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
                  onClick={() => props.onHandleClose(-1)}
                />
              </Box>
              <Box paddingX={1}>
                <Button color="red" inline text="Save" />
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
              <Label htmlFor="title">
                <Text align="left" bold>
                  Title
                </Text>
              </Label>
            </Column>
            <Column span={8}>
              <TextField
                id="title"
                onChange={e => {
                  setTitle(e.value);
                }}
              />
            </Column>
          </Box>
          <Divider />
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="contents">
                <Text align="left" bold>
                  Contents
                </Text>
              </Label>
            </Column>
            <Column span={8}>
              <TextArea
                id="contents"
                onChange={e => {
                  setContents(e.value);
                }}
              />
            </Column>
          </Box>
          <Divider />
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="url_link">
                <Text align="left" bold>
                  URL Link
                </Text>
              </Label>
            </Column>
            <Column span={8}>
              <TextField
                id="url_link"
                onChange={e => {
                  setUrl_link(e.value);
                }}
              />
            </Column>
          </Box>
          <Divider />
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="category">
                <Text align="left" bold>
                  Category
                </Text>
              </Label>
            </Column>
            <Column span={8}>
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
            </Column>
          </Box>
        </Column>
      </Box>
    </Modal>
  );
};

export default Modify;
