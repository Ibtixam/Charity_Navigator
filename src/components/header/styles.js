import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  background: #001936;
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  margin: 15px 30px 15px 0;
`;

export const SvgWrapper = styled.div`
  background-color: #355ffe;
  border-radius: 100px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  cursor: pointer;
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 88px;
  box-shadow: 0 3px 10px -3px #b8b8b8;
  position: relative;
  background: #fff;
  @media only screen and (max-width: 1000px) {
    height: 80px;
  }
  a {
    text-decoration: none;
  }
`;

export const SiteName = styled.h2`
  color: #001936;
  margin-left: 12px;
`;

export const InputWrapper = styled.div`
  width: 34%;
  border: 1px solid #9ba3c0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: 0;
    font-size: 1.1rem;
    color: #49516f;
    outline: 0;
    width: 100%;
    margin-left: 15px;
    font-family: "Poppins";
  }
  svg {
    color: white;
    width: 22px;
  }
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SearchButton = styled.div`
  width: 38px;
  padding: 14px 9px;
  text-align: center;
  background-color: #234ae0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
  a {
    color: #001936;
    font-size: 18px;
  }
`;
