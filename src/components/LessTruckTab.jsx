import { Link } from 'react-router-dom';
import { HomeRqsBtn, HomeTab } from '../styled/Home';
import { colors } from '../styled/UniversalStyle';

const WarehouseTab = () => {
  return (
    <HomeTab>
      Less Than Truckload
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        recusandae officiis consequatur. Provident, reiciendis eos dolores odit
        accusamus molestias nisi impedit cumque. Rem inventore consequuntur illo
        dolorem dolor debitis nobis.
      </p>
      <HomeRqsBtn
        style={{
          background: `${colors.buttonColor}`,
        }}
      >
        <Link to={'/'} style={{ color: 'black' }}>
          Request A Quote
        </Link>
      </HomeRqsBtn>
    </HomeTab>
  );
};

export default WarehouseTab;
