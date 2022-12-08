import { Link } from 'react-router-dom';
import { HomeRqsBtn, HomeTab } from '../styled/Home';
import { colors } from '../styled/UniversalStyle';

const TrailerTab = () => {
  return (
    <HomeTab>
      Full Truckload
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta
        eius ullam? Numquam, ratione officia nostrum aspernatur repellat in
        labore, eos quisquam inventore rerum nulla!
      </p>
      <HomeRqsBtn
        style={{
          background: `${colors.buttonColor}`,
        }}
      >
        <Link to={'/drop-trailer'} style={{ color: 'black' }}>
          Request A Quote
        </Link>
      </HomeRqsBtn>
    </HomeTab>
  );
};

export default TrailerTab;
