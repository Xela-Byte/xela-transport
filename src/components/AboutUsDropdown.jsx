import { Link } from 'react-router-dom';
import { LgsServiceContainer } from '../styled/DropDown';

const AboutUsDropdown = () => {
  return (
    <LgsServiceContainer
      style={{
        gap: '30px',
        left: '70%',
      }}
    >
      <p>
        <Link to={'/mission'}>Mission</Link>
      </p>
      <p>Culture</p>
      <p>Industry</p>
    </LgsServiceContainer>
  );
};

export default AboutUsDropdown;
