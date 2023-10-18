import React from "react";
import {
  Header,
  HeaderWrapper,
  InputWrapper,
  Navbar,
  Text,
  SearchButton,
  LinkWrapper,
  SvgWrapper,
} from "./styles";
import { CartSvg, SearchSvg } from "../../assets";
import { NavLink } from "react-router-dom";

const header = () => {
  return (
    <HeaderWrapper>
      <Header>
        <Text>Sign in</Text>
        <Text>Nonprofit Resources</Text>
        <Text>Support Charity Navigator</Text>
        <SvgWrapper>
          <CartSvg />
        </SvgWrapper>
      </Header>
      <Navbar>
        <h2
          onClick={() => {
            window.location = "/";
          }}
        >
          TGCC
        </h2>
        <InputWrapper>
          <input type="text" placeholder="Search by Charity or Cause" />
          <SearchButton>
            <SearchSvg />
          </SearchButton>
        </InputWrapper>
        <LinkWrapper>
          <NavLink to="/entries">Discover Charities</NavLink>
          <NavLink>Donor Basics</NavLink>
          <NavLink>About Us</NavLink>
        </LinkWrapper>
      </Navbar>
    </HeaderWrapper>
  );
};

export default header;
