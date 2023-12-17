import styled, { css } from "styled-components";

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

export const SiteName = styled.h1`
  color: #001936;
  margin-left: 16px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* width: 40%; */
  gap: 60px;
  margin-right: 12px;
  @media only screen and (max-width: 800px) {
    display: none;
  }
  a {
    color: #001936;
    font-size: 18px;
  }
`;

export const Menu = styled.div`
  cursor: pointer;
  margin-right: 12px;
  padding: 15px;
  border-radius: 50%;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const Menuline = styled.div`
  background: #001936;
  width: 30px;
  height: 4px;
  border-radius: 5px;
  margin-bottom: 4px;
`;

export const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #001936;
  width: 100%;
  height: 210px;
  position: absolute;
  top: 80px;
  transition: height 0.2s;

  ${({ $active }) =>
    $active &&
    css`
      height: 0;
      .menu-items {
        display: none !important;
      }
    `}
  .menu-items {
    color: #fff;
    display: block;
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
  }
  @media only screen and (min-width: 800px) {
    display: none;
    .menu-items {
      display: none;
    }
  }
`;

export const MenuItems = styled.p`
  color: #fff;
  display: block;
  text-align: center;
  font-size: 22px;
  margin: 20px 0;
`;
