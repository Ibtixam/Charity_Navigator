import React from "react";
import { FooterContainer, FooterWrapper, SiteName } from "./styles";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <SiteName>TGCC</SiteName>
        </NavLink>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
