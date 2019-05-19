import React from "react";
import { Box, Text, Link, IconButton } from "gestalt";
import "gestalt/dist/gestalt.css";

const Menu = (props) => {
  console.log('active menu : ' + props.active);

  const memuItems = () => {
    const arr = [
      {menu:'aboutme', link:'/', name:'About Me'},
      {menu:'skills', link:'/skills', name:'Skills'},
      {menu:'projects', link:'/projects', name:'Projects'}
    ];

    return arr.map((obj,idx) => {
      const active = (obj.menu === props.active?true:false)
      return (
        <Box key={idx}>
          <Text color="white" size={active?'xl':'md'} bold={active} >
            <Link href={obj.link} >
              <Box padding={3}>{obj.name}</Box>
            </Link>
          </Text>
        </Box>
      )
    })
  }

  
  return (
    <Box display="flex" column={12} justifyContent="center" color="orchid">
      <Box paddingX={1}  flex="grow" display="flex" direction="row">
        {memuItems()}
      </Box>
      {
        props.isLogged?undefined:
        <Box alignItems="center" display="flex" marginRight={2} >
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="lock"
            iconColor="darkGray"
            onClick={() => props.onHandlerClickLogin()}
          />
        </Box>
      }
    </Box>
  )
}

export default Menu;
