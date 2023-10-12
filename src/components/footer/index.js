import React from "react";
import charityNavLogo from "../../assets/charitynav-logo-stack-white.svg";
import starBadge from "../../assets/four-star-rating-badge--1-.svg";
import bbbLogo from "../../assets/ac-s-cmyk-h-reversedwhite-w-url-01.svg";
import candidSeal from "../../assets/candid-seal-platinum-2023.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import youtubeIcon from "../../assets/youtube.png";
import linkedinIcon from "../../assets/linkedin.png";
import { FooterWrapper, Input, InputWrapper, SubmitButton } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="firstpair">
          <img className="logo" src={charityNavLogo} alt="CharityNav Logo" />
          <p>
            299 Market Street, Suite 250 <br /> Saddle Brook, NJ 07663
          </p>
          <div className="threeimg">
            <img className="star" src={starBadge} alt="Star Badge" />
            <img className="bbb" src={bbbLogo} alt="BBB Logo" />
            <img className="seal" src={candidSeal} alt="Candid Seal" />
          </div>
        </div>

        <div className="secondpair">
          <p style={{ marginBottom: "15px" }}>
            Sign up for donor tips and resources
          </p>
          <InputWrapper>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="text" placeholder="Email Address" />
          </InputWrapper>
          <SubmitButton>Sign Up Now</SubmitButton>
          <div className="interpair">
            <div className="pra">
              <p>Press Room</p>
              <p>Financials and Policies</p>
              <p>Privacy Policy</p>
              <p>Teams of Use </p>
            </div>

            <div className="pra">
              <p>FAQs/Contant Us</p>
              <p>Careers</p>
              <p>API</p>
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
      </div>
    </FooterWrapper>
  );
};

export default Footer;
