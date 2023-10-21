import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #001936;
  padding: 10px 50px 10px;
  @media only screen and (max-width: 400px) {
    padding: 10px 50px 10px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SiteName = styled.h2`
  color: #fff;
  font-size: 50px;
  margin-top: 20px;
  @media screen and (max-width: 480px) {
    font-size: 40px;
  }
`;
