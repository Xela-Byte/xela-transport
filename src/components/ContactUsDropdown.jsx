import React from 'react';
import { Link } from 'react-router-dom';
import { LgsServiceContainer } from '../styled/DropDown';

const ContactUsDropdown = () => {
  return (
    <LgsServiceContainer style={{ padding: '20px', left: '82%' }}>
      <p>Customers</p>
      <p>Carriers</p>
      <p>
        <Link to={'/contact'}>General</Link>{' '}
      </p>
    </LgsServiceContainer>
  );
};

export default ContactUsDropdown;
