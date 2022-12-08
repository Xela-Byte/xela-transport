import React, { useState } from 'react';
import Reaptcha from 'reaptcha';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {
  ReqBtn,
  ReqCapthcha,
  ReqForm,
  ReqFormLabel,
  ReqHeaderText,
  ReqInput,
  ReqPrivacy,
  ReqPrivacyCheckBox,
  ReqQuoteContainer,
  ReqTextArea,
} from '../styled/ReqQuote';

const ReqQuote = () => {
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

  const equipmentOptions = [
    'Dry Van / Truck Load',
    'Flatbed / Step Deck',
    'Temperature Controlled Fresh',
    'Temperature Frozen',
    'Over Dimensional / Other',
  ];

  const trailerOptions = ['40 feet', '45 feet', '48 feet', '53 feet', 'Other'];
  const defaultEquipmentOption = equipmentOptions[0];
  const defaultTrailerOption = trailerOptions[0];
  return (
    <ReqQuoteContainer>
      <ReqForm onSubmit={(e) => handleSubmit(e)}>
        <ReqHeaderText>Load Quote</ReqHeaderText>
        <ReqFormLabel>First Name</ReqFormLabel>
        <ReqInput type='text' placeholder='John' />
        <ReqFormLabel>Last Name</ReqFormLabel>
        <ReqInput type='text' placeholder='Doe' />
        <ReqFormLabel>Title</ReqFormLabel>
        <ReqInput type='text' placeholder='' />
        <ReqFormLabel>Company</ReqFormLabel>
        <ReqInput type='text' placeholder='' />
        <ReqFormLabel>Phone</ReqFormLabel>
        <ReqInput type='number' placeholder='' />
        <ReqFormLabel>Email</ReqFormLabel>
        <ReqInput type='email' placeholder='johndoe@gmail.com' />
        <ReqFormLabel>Company</ReqFormLabel>
        <ReqInput type='text' placeholder='' />
        <ReqFormLabel>ORIGIN: City/State/Province/Zip</ReqFormLabel>
        <ReqInput type='text' placeholder='' />
        <ReqFormLabel>DESTINATION: City/State/Province/Zip</ReqFormLabel>
        <ReqInput type='text' placeholder='' />
        <ReqFormLabel>Date load needs to be picked up</ReqFormLabel>
        <ReqInput type='date' placeholder='' />
        <ReqFormLabel>Date load needs to be delivered</ReqFormLabel>
        <ReqInput type='date' placeholder='' />
        <ReqFormLabel>Equipment</ReqFormLabel>
        <Dropdown
          options={equipmentOptions}
          value={defaultEquipmentOption}
          placeholder=''
          className='dropdown'
          menuClassName='dropdown-content'
        />
        <ReqFormLabel>Trailer Size</ReqFormLabel>
        <Dropdown
          options={trailerOptions}
          value={defaultTrailerOption}
          placeholder=''
          menuClassName='dropdown-content'
          className='dropdown'
        />
        <ReqFormLabel>
          Freight Description / Shipping Details / Comments
        </ReqFormLabel>
        <ReqTextArea rows={7} placeholder='' />
        <ReqPrivacy>
          <ReqPrivacyCheckBox>
            <label className='container'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
          </ReqPrivacyCheckBox>
          <p>I agree to PGI's Terms of Use and Privacy and Cookies Policy</p>
        </ReqPrivacy>
        <ReqCapthcha>
          <Reaptcha
            sitekey={'6LeVp8YhAAAAAMqAN2wHdxMEevt1FSXP6ezd1CuI'}
            ref={captchaRef}
            onVerify={verify}
          />
        </ReqCapthcha>
        <ReqBtn type='submit'>Submit</ReqBtn>
      </ReqForm>
    </ReqQuoteContainer>
  );
};

export default ReqQuote;
