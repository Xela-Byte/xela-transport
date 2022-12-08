import {
  AboutUsContainer,
  AboutUsDisplay,
  AboutUsDisplayContent,
} from '../styled/AboutUs';

import AboutUsOverlay from '../assets/contact.jpg';
import { colors } from '../styled/UniversalStyle';
import {
  ContactContainer,
  ContactContent,
  ContactSubContent,
} from '../styled/Contact';
import Phone from '../assets/contact.svg';

const Contact = () => {
  return (
    <>
      <AboutUsContainer>
        <AboutUsDisplay>
          <img src={AboutUsOverlay} alt='' />
          <AboutUsDisplayContent style={{ color: colors.mainColor }}>
            Contact Us
          </AboutUsDisplayContent>
        </AboutUsDisplay>
      </AboutUsContainer>
      <ContactContainer>
        <ContactContent>
          <div className='sub-content'>
            <img src={Phone} alt='' />
            <p>Our Office</p>
          </div>
          <ContactSubContent>
            <p>Location</p>
            <p>27 Division Street, BDC 270104, New York, USA</p>
            <p>Phone</p>
            <p>
              <a href='tel:8183139166'>818-313-9166</a>
            </p>
          </ContactSubContent>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
