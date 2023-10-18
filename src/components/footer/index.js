import React from "react";
import starBadge from "../../assets/four-star-rating-badge--1-.svg";
import bbbLogo from "../../assets/ac-s-cmyk-h-reversedwhite-w-url-01.svg";
import candidSeal from "../../assets/candid-seal-platinum-2023.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import youtubeIcon from "../../assets/youtube.png";
import linkedinIcon from "../../assets/linkedin.png";
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
          </NavLink>{" "}
          <FooterText>
            299 Market Street, Suite 250 <br /> Saddle Brook, NJ 07663
          </FooterText>
          <div className="threeimg">
            <img className="star" src={starBadge} alt="Star Badge" />
            <img className="bbb" src={bbbLogo} alt="BBB Logo" />
            <img className="seal" src={candidSeal} alt="Candid Seal" />
          </div>
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
              <FooterText>Press Room</FooterText>
              <FooterText>Financials and Policies</FooterText>
              <FooterText>Privacy Policy</FooterText>
              <FooterText>Teams of Use </FooterText>
            </div>

            <div className="pra">
              <FooterText>FAQs/Contant Us</FooterText>
              <FooterText>Careers</FooterText>
              <FooterText>API</FooterText>
            </div>
          </div>
          <div className="icon">
            <img src={facebookIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={youtubeIcon} alt="YouTube" />
            <img src={linkedinIcon} alt="LinkedIn" />
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
