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
  SelectList,
  Link,
  Checkbox
} from "gestalt";
import "gestalt/dist/gestalt.css";

const Modify = props => {
  const [title, setTitle] = useState(props.data.title);
  const [contents, setContents] = useState(props.data.contents);
  const [url_link, setUrl_link] = useState(props.data.url_link);
  const [category, setCategory] = useState(props.data.category);
  const file_path = props.data.file_path;
  const file_origin = props.data.file_origin;
  const [checked, setChecked] = useState(file_path?false:true);

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

  const changeChecked = () => {
    setChecked(!checked);
    props.onHandleDelChecked(checked)
  }

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
                <Button
                  color="red"
                  inline
                  text="Save"
                  onClick={() => props.onPut({
                    title: title,
                    contents: contents,
                    url_link: url_link,
                    category: category,
                    is_del_file : checked
                  })}
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
                value={title}
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
                value={contents}
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
                value={url_link}
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
          <Divider />
          <Box paddingY={2} paddingX={4} display="flex">
            <Column span={4}>
              <Label htmlFor="attached">
                <Text align="left" bold>
                  Attached
                </Text>
              </Label>
            </Column>
            <Column span={4}>
              <Link href={file_path}>
                <Box padding={2}>
                  <Text bold>{file_origin}</Text>
                </Box>
              </Link>
            </Column>
            <Column span={4}>
              <Box
                alignItems="center"
                direction="row"
                display={file_path?'flex':'none'}
                padding={2}
              >
                <Checkbox
                  checked={checked}
                  id="chkDel"
                  name="chkDel"
                  onChange={e => {
                    changeChecked();
                  }}
                />
                <Label htmlFor="chkDel">
                  <Box paddingX={2}>
                    <Text>Delete checked</Text>
                  </Box>
                </Label>
              </Box>
            </Column>
          </Box>
          <Box
            paddingY={2}
            paddingX={4}
            display={checked||!file_path ? "flex" : "none"}
            justifyContent="end"
          >
            <Column span={8}>
              <input
                type="file"
                name="file"
                onChange={e => props.onHandleFileInput(e)}
              />
            </Column>
          </Box>
        </Column>
      </Box>
    </Modal>
  );
};

export default Modify;
