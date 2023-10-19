import React, { useState } from "react";
import {
  TextContainer,
  TitleWrapper,
  Wrapper,
  Paragraph,
  SubmitButton,
  InputWrapper,
  Input,
  FormTitle,
  FormContainer,
  MainTitle,
} from "./styles";
import { SharedAPI } from "../../lib/shared.api";

const Terms = () => {
  const [charityEntry, setCharityEntry] = useState({});
  const [checked, setchecked] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCharityEntry((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const addEntrires = async () => {
    await SharedAPI.addCharitiesEntry(charityEntry);
  };

  const handleSubmit = () => {
    if (!checked) {
      alert("Please Agree to terms and conditions");
    } else {
      addEntrires();
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <p className="title">Terms of Use</p>
        <p className="update">Last updated November 1, 2022</p>
      </TitleWrapper>
      <TextContainer>
        <div className="text-wrapper">
          <Paragraph>
            Before you can continue, please read and agree to our updated Terms
            of Service — written to help you understand how we collect, use, and
            share your information. Terms and Conditions, Nonprofit Portal Last
            updated November 1, 2022 Thank you for using Charity Navigator's
            Nonprofit Portal (the "Portal"). Charity Navigator has developed the
            Portal in order to enable charities to interface directly with
            Charity Navigator and to submit charity data and other program
            information for us to consider in formulating and publishing the
            ratings contained within the Charity Navigator Database and for our
            other business purposes. By accepting these Terms and Conditions,
            and in using the Portal, you indicate that you have full authority
            and capacity to act on behalf of the named charity ("Charity
          </Paragraph>
          <Paragraph>
            1. You have read and agree to comply with and be bound by the Terms
            of Use governing the Charity Navigator website,
            https://www.charitynavigator.org, and related applications and
            platforms, including the Portal (the"Terms of Use").
          </Paragraph>
          <Paragraph>
            2. All charity data and other program information you submit through
            the Portal shall be deemed User Content as set forth in the Terms of
            Use, and you agree to Charity Navigator's data and use practices
            regarding User Content provided therein.
          </Paragraph>
          <Paragraph>
            3. Without limiting the foregoing, you acknowledge that Charity
            Navigator shall have the unrestricted right to use, publish and
            otherwise exploit any and all User Content, whether submitted in the
            past, present, or future, for its business purposes and you
            acknowledge and agree that you automatically grant and hereby do
            grant to Charity Navigator a non-exclusive, royalty-free, perpetual,
            transferable, sub-license license to modify, compile, combine with
            other content and data, copy, record, synchronize, format, and index
            such User Content and display, perform, sub-license, commercialize,
            and make it available to others in all media now known or hereafter
            devised, including, without limitation, through the Platform and our
            Charity Navigator API.
          </Paragraph>
          <Paragraph>
            4. You grant authority and consent to Charity Navigator to solicit
            funds and fundraise on behalf of the Charity User through Charity
            Navigator's "Giving Basket" functionality as it may exist from time
            to time.
          </Paragraph>
          <FormContainer>
            <MainTitle>
              All the information should be same as charity navigator.
            </MainTitle>
            <FormTitle>EIN of charity</FormTitle>
            <InputWrapper>
              <Input
                type="text"
                name="einNumber"
                placeholder="EIN number"
                value={charityEntry.einNumber}
                onChange={handleChange}
              />
              <FormTitle>Fundraiser Head Information</FormTitle>
              <Input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={charityEntry.fullName}
                onChange={handleChange}
              />
              <Input
                type="text"
                name="title"
                value={charityEntry.title}
                onChange={handleChange}
                placeholder="Title"
              />
              <Input
                type="email"
                name="email"
                value={charityEntry.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <Input
                type="text"
                name="phone"
                value={charityEntry.phone}
                onChange={handleChange}
                placeholder="Phone no."
              />
            </InputWrapper>
            <div style={{ marginTop: "20px" }}>
              <input
                type="checkbox"
                name="agreeTerms"
                onClick={() => setchecked(!checked)}
              />
              <label> I agree and accept Terms</label>
            </div>
            <SubmitButton onClick={handleSubmit}>Accept Terms</SubmitButton>
          </FormContainer>
        </div>
      </TextContainer>
    </Wrapper>
  );
};

export default Terms;
