import React, { useState } from 'react';
import Reaptcha from 'reaptcha';
import useGetWindowWidth from '../hooks/useWindowSize';

import {
  CarrierFormContainer,
  CarrierFormLabel,
  CarrierFormStyled,
  CarrierHeaderText,
  CarrierReqBtn,
  CarrierReqCapthcha,
  CarrierReqContainer,
  CarrierReqDocument,
  CarrierReqInput,
  CarrierReqPrivacy,
  CarrierReqPrivacyCheckBox,
} from '../styled/CarrierForm';

const CarrierForm = () => {
  const captchaRef = React.createRef();
  const [captchaToken, setCaptchaToken] = useState(null);
  const verify = () => {
    captchaRef.current.getResponse().then((res) => {
      setCaptchaToken(res);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = await captchaRef.current.getValue();
    captchaRef.current.reset();
    setCaptchaToken(token);

    console.log(captchaToken);
  };
  const windowWidth = useGetWindowWidth().innerWidth;
  return (
    <CarrierFormContainer>
      <CarrierFormStyled onSubmit={handleSubmit}>
        <CarrierHeaderText>Carrier</CarrierHeaderText>
        <CarrierFormLabel>Company Information</CarrierFormLabel>
        <CarrierReqInput type={'text'} placeholder={'Company Name'} />
        <CarrierReqInput type={'text'} placeholder={'City'} />
        <CarrierReqInput type={'text'} placeholder={'State'} />
        <CarrierReqInput type={'text'} placeholder={'Zip Code'} />
        <CarrierFormLabel>Primary Contact</CarrierFormLabel>
        <CarrierReqInput type={'text'} placeholder={'Name'} />
        <CarrierReqInput type={'number'} placeholder={'Phone'} />
        <CarrierReqInput type={'text'} placeholder={'Email'} />
        <CarrierFormLabel>At least one entry # is required:</CarrierFormLabel>
        <CarrierReqInput
          type={'text'}
          placeholder={'Motor carrier number(MC)'}
        />
        <CarrierReqInput
          type={'number'}
          placeholder={'Freight forwarder (FF#)'}
        />
        <CarrierReqInput type={'text'} placeholder={'Canadian COVR/RIN#'} />
        <CarrierReqInput type={'text'} placeholder={'US DOT#'} />
        <CarrierReqInput type={'text'} placeholder={'NVOCC#'} />
        <CarrierReqContainer>
          CARRIER REGISTRATION: Requirements <br /> 1- Authorization to sign a
          binding contract for your company.
          <br /> 2- Your insurance broker's contact information OR a sample
          Certification of Insurance of both CARGO and LIABILITY insurance from
          your broker. <br />
          3- Company TAX ID information
          <CarrierReqDocument
            type={'file'}
            multiple
            max={3}
            accept={'image/*,.pdf'}
          />
        </CarrierReqContainer>
        <CarrierReqPrivacy>
          <CarrierReqPrivacyCheckBox>
            <label className='container'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
          </CarrierReqPrivacyCheckBox>
          <p>
            I agree to PGI's Terms of {windowWidth < 990 ? <br /> : ''}Use and
            Privacy and Cookies Policy
          </p>
        </CarrierReqPrivacy>
        <CarrierReqCapthcha>
          <Reaptcha
            sitekey={'6LeVp8YhAAAAAMqAN2wHdxMEevt1FSXP6ezd1CuI'}
            ref={captchaRef}
            onVerify={verify}
          />
        </CarrierReqCapthcha>
        <CarrierReqBtn type='submit'>Submit</CarrierReqBtn>
      </CarrierFormStyled>
    </CarrierFormContainer>
  );
};

export default CarrierForm;
