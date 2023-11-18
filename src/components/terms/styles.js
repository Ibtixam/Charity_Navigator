import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const TitleWrapper = styled.div`
  padding-top: 40px;
  p {
    text-align: center;
  }
  .title {
    font-size: 65px;
    font-weight: 800;
  }
  .update {
    font-size: 20px;
    font-weight: 500;
    margin-top: 8px;
  }
  @media only screen and (max-width: 800px) {
    .title {
      font-size: 35px;
    }
    .update {
      font-size: 15px;
    }
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
    padding: 60px 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 800px) {
    .text-wrapper {
      padding: 20px 30px;
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

export const SubmitButton = styled.button`
  border: 0;
  outline: 0;
  background: #355ffe;
  color: #fff;
  font-family: inherit;
  font-weight: 600;
  font-size: 18px;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: white;
  padding: 50px 70px;
  border-radius: 10px;
  border: 2px solid #e6e6e6;
  @media screen and (max-width: 450px) {
    width: 90%;
    padding: 50px 20px;
  }
`;

export const FormTitle = styled.h3`
  text-align: start;
  color: #001936;
  font-size: 22px;
  margin: 20px 0;
  @media screen and (max-width: 450px) {
    font-size: 18px;
  }
`;

export const MainTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  @media only screen and (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Input = styled.input`
  border: 2px solid #e6e6e6;
  outline: 0;
  background: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 18px;
  &:focus {
    border: 2px solid #4870fe;
  }
  @media only screen and (max-width: 680px) {
    width: 90%;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, auto);
  width: 100%;
  > :first-child,
  :nth-child(2) {
    grid-column: 1 / -1;
  }
  @media only screen and (max-width: 680px) {
    grid-template-columns: repeat(1, auto);
  }
`;
