import React from "react";
import { Box, Text, Link } from "gestalt";
import "gestalt/dist/gestalt.css";

const Menu = (props) => {
  console.log('active menu : ' + props.active)

  const memuItems = () => {
    const arr = [
      {menu:'aboutme', link:'/', name:'About Me'},
      {menu:'skills', link:'/skills', name:'Skills'},
      {menu:'projects', link:'/projects', name:'Projects'}
    ];

    return arr.map((obj,idx) => {
      const active = (obj.menu === props.active?true:false)
      return (
        <Text color="white" size={active?'xl':'md'} bold={active} key={idx}>
          <Link href={obj.link} >
            <Box padding={3}>{obj.name}</Box>
          </Link>
        </Text>
      )
    })
  }

  return (
    <Box display="flex" column={12} justifyContent="center" color="orchid">
      {memuItems()}
    </Box>
  )
}

export default Menu;
