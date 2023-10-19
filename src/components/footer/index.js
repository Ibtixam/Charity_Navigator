import React from "react";
import {
  FooterContainer,
  FooterText,
  FooterWrapper,
  Input,
  InputWrapper,
  SiteName,
  SubmitButton,
} from "./styles";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <div className="firstpair">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <SiteName>TGCC</SiteName>
          </NavLink>
          <FooterText>
            299 Market Street, Suite 250 <br /> Saddle Brook, NJ 07663
          </FooterText>
        </div>
        <div className="secondpair">
          <FooterText style={{ marginBottom: "15px" }}>
            Sign up for donor tips and resources
          </FooterText>
          <InputWrapper>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Email Address" />
          </InputWrapper>
          <SubmitButton>Sign Up Now</SubmitButton>
          <div className="interpair">
            <div className="pra">
              <FooterText>FAQs/Contant Us</FooterText>
            </div>
          </div>
          <p className="copyright">
            &copy; Copyright 2023 | EIN 13-418824 | Bridge ID 3108588923
          </p>
        </div>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
