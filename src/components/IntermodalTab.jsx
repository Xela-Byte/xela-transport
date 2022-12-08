import { Link } from 'react-router-dom';
import { HomeRqsBtn, HomeTab } from '../styled/Home';
import { colors } from '../styled/UniversalStyle';

const BrokeageTab = () => {
  return (
    <HomeTab>
      Intermodal
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
        aspernatur provident quod dignissimos. Debitis unde consequuntur ipsa
        assumenda nostrum, voluptatem incidunt. Enim, magni, iure, magnam in
        voluptatibus tempora voluptatem illum architecto blanditiis eum officia!
        Repellendus?
      </p>
      <HomeRqsBtn
        style={{
          background: `${colors.buttonColor}`,
        }}
      >
        <Link to={'/rqt-quote'} style={{ color: 'black' }}>
          Request A Quote
        </Link>
      </HomeRqsBtn>
    </HomeTab>
  );
};

export default BrokeageTab;
