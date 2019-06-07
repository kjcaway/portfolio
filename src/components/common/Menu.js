import React from "react";
import { Box, Text, Link, IconButton } from "gestalt";
import "gestalt/dist/gestalt.css";

const Menu = (props) => {
  // login icon은 auth check 후 표시 되도록 함. 
  const viewIconYN = (props.status !== 'INIT' && props.status !== 'WAITING');

  const memuItems = () => {
    const arr = [
      {menu:'aboutme', link:'/intro', name:'About Me'},
      {menu:'skills', link:'/skills', name:'Skills'},
      {menu:'projects', link:'/projects', name:'Projects'}
    ];

    if(props.isLogged){
      arr.push({menu:'manage', link:'/manage', name:'Manage'})
    }
    
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
        viewIconYN && 
        (props.isLogged?
        <Box alignItems="center" display="flex" marginRight={2} >
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="logout"
            iconColor="darkGray"
            onClick={() => props.onHandlerClickLogout()}
          />
        </Box>
        :
        <Box alignItems="center" display="flex" marginRight={2} >
          <IconButton
            accessibilityLabel="Love"
            bgColor="white"
            icon="lock"
            iconColor="darkGray"
            onClick={() => props.onHandlerClickLogin()}
          />
        </Box>
        )
      }
    </Box>
  )
}

export default Menu;
