import { Link } from 'react-router-dom';
import { NavBarTab, NavBarTabContainer } from '../styled/Navbar';

const NavbarTab = () => {
  return (
    <NavBarTabContainer>
      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginLeft: '60%',
        }}
      >
        <NavBarTab>
          <Link to={'rqt-quote'}>Request A Quote</Link>
        </NavBarTab>
        <NavBarTab>
          <Link to={'/'}>Track Shipments</Link>
        </NavBarTab>
        <NavBarTab>
          <Link to={'carriers'}>Carriers</Link>
        </NavBarTab>
        <NavBarTab>
          <Link to={'/'}>Login</Link>
        </NavBarTab>
      </div>
    </NavBarTabContainer>
  );
};

export default NavbarTab;
