/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import {
  Navbar,
  LinkWrapper,
  SiteName,
  Menuline,
  Menu,
  Hamburger,
  MenuItems,
} from "./styles";
import { NavLink } from "react-router-dom";

const header = () => {
  const [open, setOpen] = useState(false);
  const Items = useRef(null);

  useEffect(() => {
    const handleHamburger = (e) => {
      if (!Items.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleHamburger);

    return () => {
      document.removeEventListener("click", handleHamburger);
    };
  }, []);

  const MenuLine = [];

  for (let index = 0; index < 3; index++) {
    MenuLine.push(<Menuline key={index} />);
  }

  const MENU_ITEMS = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Discover Charities",
      url: "/entries",
    },
    {
      name: "About Us",
      url: "",
    },
  ];

  return (
    <Navbar>
      <NavLink to="/">
        <SiteName>TGCC</SiteName>
      </NavLink>
      <Hamburger active={!open}>
        {MENU_ITEMS.map((item, index) => {
          const { name, url } = item;
          return (
            <NavLink to={url} key={index} onClick={() => setOpen(false)}>
              <MenuItems className="menu-items">{name}</MenuItems>
            </NavLink>
          );
        })}
      </Hamburger>
      <LinkWrapper>
        {MENU_ITEMS.map((item, index) => {
          const { name, url } = item;
          return (
            <NavLink key={index} to={url}>
              {name}
            </NavLink>
          );
        })}
      </LinkWrapper>
      <Menu onClick={() => setOpen(!open)} ref={Items}>
        {MenuLine}
      </Menu>
    </Navbar>
  );
};

export default header;
