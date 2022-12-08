import {
  CollapsibleNavbarContainer,
  CollapsibleNavbarTab,
  CollapsibleNavbarTabContent,
  CollapsibleNavbarTabIcon,
  // CollapsibleNavbarTabSubContent,
} from '../styled/Navbar';

import ArrowRight from '../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

const CollapsibleNavbar = () => {
  return (
    <CollapsibleNavbarContainer>
      <CollapsibleNavbarTab>
        Home <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>{' '}
      <CollapsibleNavbarTabContent>
        <p onClick={() => window.location.reload()}>
          <Link to={'/'}>Home</Link>
        </p>
      </CollapsibleNavbarTabContent>
      <CollapsibleNavbarTab>
        Logistics Services <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>
      {/* <CollapsibleNavbarTabContent>
        <p> Full Truckload (FTL) </p>
        <p>Less Than Truckload (LTL)</p>
        <p>Intermodal</p> <p>Drayage</p>
        <CollapsibleNavbarTabSubContent>
          Special Services
          <p>Drop Trailer</p>
          <p>Oversize-Overweight</p>
          <p>Partials</p>
          <p>Warehousing</p>
          <p>Customs Brokerage</p>
          <p>Mexico Cross-Border</p>
          <p>Canada Services</p>
        </CollapsibleNavbarTabSubContent>
      </CollapsibleNavbarTabContent> */}
      <CollapsibleNavbarTabContent>
        <p onClick={() => window.location.reload()}>
          <Link to={'rqt-quote'}>Request A Quote</Link>
        </p>
      </CollapsibleNavbarTabContent>
      <CollapsibleNavbarTab>
        Carriers <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>
      <CollapsibleNavbarTabContent>
        {/* <p>Carriers</p> */}
        <p onClick={() => window.location.reload()}>
          <Link to={'carriers'}>Setting You Up</Link>
        </p>
        {/* <p>FAQs</p> */}
      </CollapsibleNavbarTabContent>
      {/* <CollapsibleNavbarTab>
        What Moves <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab> */}
      <CollapsibleNavbarTab>
        About Us <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>
      {/* <CollapsibleNavbarTabContent>
        <p>Mission</p>
        <p>Culture</p>
        <p>Industry</p>
        <p>Newsletter</p>
      </CollapsibleNavbarTabContent> */}
      <CollapsibleNavbarTabContent>
        {/* <p>Carriers</p> */}
        <p onClick={() => window.location.reload()}>
          <Link to={'/about-us'}>About Us</Link>
        </p>
        {/* <p>FAQs</p> */}
      </CollapsibleNavbarTabContent>
      <CollapsibleNavbarTab>
        Our Mission <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>{' '}
      <CollapsibleNavbarTabContent>
        <p onClick={() => window.location.reload()}>
          <Link to={'/mission'}>Mission</Link>
        </p>
      </CollapsibleNavbarTabContent>
      <CollapsibleNavbarTab>
        Contact Us <CollapsibleNavbarTabIcon src={ArrowRight} alt='' />
      </CollapsibleNavbarTab>
      {/* <CollapsibleNavbarTabContent>
        <p>Customers</p>
        <p>Carriers</p>
        <p>General</p>
      </CollapsibleNavbarTabContent> */}
      <CollapsibleNavbarTabContent>
        {/* <p>Carriers</p> */}
        <p onClick={() => window.location.reload()}>
          <Link to={'contact'}>Contact Us</Link>
        </p>
        {/* <p>FAQs</p> */}
      </CollapsibleNavbarTabContent>
      <CollapsibleNavbarTabContent>
        <p onClick={() => window.location.reload()}>
          <Link to={'login'}>Login</Link>
        </p>
        <p onClick={() => window.location.reload()}>
          <Link to={'contact'}> 818.478.3512</Link>
        </p>
        <p onClick={() => window.location.reload()}>
          <Link to={'track'}>Track Shipments</Link>
        </p>
      </CollapsibleNavbarTabContent>
    </CollapsibleNavbarContainer>
  );
};

export default CollapsibleNavbar;
