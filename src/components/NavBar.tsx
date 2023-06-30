import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import NavLinkButton from "./NavLinkButton";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
      <NavLinkButton href='/' key='home' title='HOME' />
      <NavLinkButton href='/blog' key='blog' title='BLOG' />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
