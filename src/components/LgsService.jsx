import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { LgsServiceContainer } from '../styled/DropDown';
const LgsService = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <LgsServiceContainer style={{ top: scrolled ? '12vh' : '', left: '55%' }}>
      <div>
        <p>
          <Link to={'/ftl'}>Full Truckload (FTL)</Link>
        </p>
        <p>Less Than Truckload (LTL)</p>
        <p>
          <Link to={'/intermodal'}>Intermodal</Link>
        </p>
        <p>
          <Link to={'/drayage'}>Drayage</Link>
        </p>
      </div>
      <div>
        <p style={{ fontSize: '23px' }}>Special Services</p>
        <p>
          <Link to={'/drop-trailer'}> Drop Trailer </Link>{' '}
        </p>
        <p> Oversize-Overweight</p>
        <p>Partials</p>
        <p>Warehousing</p>
        <p>Customs Brokerage </p>
        <p>Mexico Cross-Border</p>
        <p>Canada Services</p>
      </div>
    </LgsServiceContainer>
  );
};

export default LgsService;
