import React from "react";
import Logo from "../../assets/logo.png";
import {
  Header,
  HeaderWrapper,
  InputWrapper,
  Navbar,
  Text,
  SearchButton,
  LinkWrapper,
  Link,
  SvgWrapper,
} from "./styles";
import { CartSvg, SearchSvg } from "../../assets";

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
        <img
          src={Logo}
          alt="Logo"
          onClick={() => {
            window.location = "/";
          }}
        />
        <InputWrapper>
          <input type="text" placeholder="Search by Charity or Cause" />
          <SearchButton>
            <SearchSvg />
          </SearchButton>
        </InputWrapper>
        <LinkWrapper>
          <Link
            onClick={() => {
              window.location = "/entries";
            }}
          >
            Discover Charities
          </Link>
          <Link>Donor Basics</Link>
          <Link>About Us</Link>
        </LinkWrapper>
      </Navbar>
    </HeaderWrapper>
  );
};

export default header;
