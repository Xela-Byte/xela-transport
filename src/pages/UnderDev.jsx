import {
  UnderDevContainer,
  UnderDevContent,
  UnderDevImg,
} from '../styled/UnderDev';
import UnderDevIcon from '../assets/under-dev.svg';
import { Link } from 'react-router-dom';

const UnderDev = () => {
  return (
    <UnderDevContainer>
      <UnderDevImg src={UnderDevIcon} />
      <UnderDevContent>
        This Section is still under development. Do check back later or visit
        our <Link to={'/'}>homepage</Link>.
      </UnderDevContent>
    </UnderDevContainer>
  );
};

export default UnderDev;
