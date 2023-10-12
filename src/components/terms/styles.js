import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  ul {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    list-style-type: none;
    margin: 40px 0 0 20px;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }

  li,
  a {
    color: black;
    font-size: 22px;
    font-weight: 500;
  }

  a {
    text-decoration: underline;
  }

  li:not(:last-child)::after {
    content: "/";
    margin-left: 12px;
    color: #858585;
    text-decoration: none;
  }
`;

export const TitleWrapper = styled.div`
  /* width: 100%; */
  padding-top: 40px;
  p {
    text-align: center;
  }
  .title {
    font-size: 65px;
    font-weight: 800;
  }
  @media only screen and (max-width: 1000px) {
    .title {
      font-size: 40px;
    }
    .update {
      font-size: 14px;
    }
  }

  .update {
    font-size: 20px;
    font-weight: 500;
    margin-top: 8px;
  }
`;

export const TextContainer = styled.div`
  max-width: 100%;
  background-color: #f7f5f3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .text-wrapper {
    padding: 60px 250px;
  }
  @media only screen and (max-width: 1000px) {
    .text-wrapper {
      padding: 20px 35px;
    }
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  margin-bottom: 50px;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const SocailWrapper = styled.div`
  background-color: #858585;
  width: 120px;
`;

export const SubmitButton = styled.button`
  border: 0;
  outline: 0;
  background: #355ffe;
  color: #fff;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;
