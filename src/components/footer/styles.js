import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #001936;
  padding: 32px 63px 100px;
  @media only screen and (max-width: 400px) {
    padding: 32px 50px 50px;
  }

  .logo {
    width: 50%;
    padding-bottom: 60px;
    padding-top: 40px;
  }

  .star,
  .seal {
    width: 120px;
  }

  .bbb {
    width: 62px;
    padding-left: 32px;
  }

  .threeimg img {
    padding-top: 70px;
  }

  .secondpair p {
    font-size: 20px;
    font-weight: 500;
  }

  .interpair {
    display: flex;
    gap: 20px;
    padding-top: 43px;
    flex-wrap: wrap;
  }

  .icon {
    display: flex;
    gap: 30px;
  }

  .icon img {
    height: 28px;
    padding: 50px 0;
  }

  .copyright {
    color: white;
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) {
    .interpair {
      gap: 0;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 150px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.div`
  font-size: 20px;
  padding-top: 24px;
  color: white;
`;

export const Input = styled.input`
  border: 2px solid transparent;
  outline: 0;
  background: #fff;
  padding: 12px 20px;
  border-radius: 12px;
  font-family: inherit;
  font-size: 18px;
  width: inherit;
  &:focus {
    border: 2px solid #4870fe;
  }
`;

export const SubmitButton = styled.button`
  border: 0;
  outline: 0;
  width: 40%;
  background: #355ffe;
  color: #fff;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 20px;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 400px) {
    width: 60%;
    font-size: 18px;
  }
`;

export const InputWrapper = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  grid-template-columns: repeat(2, auto);
  > :last-child {
    grid-column: 1 / -1; /* Span from first to last column */
  }
  @media only screen and (max-width: 1000px) {
    grid-template-rows: repeat(1, max);
    grid-template-columns: repeat(2, auto);
    grid-template-columns: none;
    width: 90%;
  }
`;

export const SiteName = styled.h2`
  color: #fff;
  font-size: 60px;
  margin-top: 20px;
  @media screen and (max-width: 480px) {
    font-size: 45px;
  }
`;
