/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import {
  Navbar,
  LinkWrapper,
  SiteName,
  Menuline,
  Menu,
  Hamburger,
} from "./styles";
import { NavLink } from "react-router-dom";

const header = () => {
  const [open, setOpen] = useState(false);

  const MenuLine = [];

  for (let index = 0; index < 3; index++) {
    MenuLine.push(<Menuline key={index} />);
  }
  return (
    <Navbar>
      <NavLink to="/">
        <SiteName>TGCC</SiteName>
      </NavLink>
      <Hamburger active={!open}>
        <NavLink className="menu-items" to="/">
          Home
        </NavLink>
        <NavLink className="menu-items" to="/entries">
          Discover Charities
        </NavLink>
        <NavLink className="menu-items">About Us</NavLink>
      </Hamburger>
      <LinkWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/entries">Discover Charities</NavLink>
        <NavLink>About Us</NavLink>
      </LinkWrapper>
      <Menu onClick={() => setOpen(!open)}>{MenuLine}</Menu>
    </Navbar>
  );
};

export default header;
