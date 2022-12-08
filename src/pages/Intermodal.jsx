import {
  FtlContainer,
  FtlDescContainer,
  FtlDescContent,
  FtlDesTab,
  FtlDisplay,
  FtlDisplayContent,
  FtlMoreInfoContainer,
  FtlMoreInfoContent,
  FtlMoreInfoTab,
  FtlWorksContainer,
  FtlWorksContent,
  FtlWorksStepsContainer,
  FtlWorksStepsTab,
} from "../styled/FullTruckLoad";

import { HomeRqsBtn } from "../styled/Home";

import FullTruck from "../assets/full-truck-load.jpg";
import Train from "../assets/train.jpg";
import Correct from "../assets/correct.svg";
import TruckTwo from "../assets/moving-truck.jpg";
import TruckInTunnel from "../assets/truck-in-tunnel.jpg";
import ShipperChart from "../assets/ShipperChart.png";
import TrainLandscape from "../assets/train-2.jpg";
import { Link } from "react-router-dom";

const Intermodal = () => {
  return (
    <FtlContainer>
      <FtlDisplay>
        <img src={FullTruck} alt="" />
        <FtlDisplayContent>
          <p>Intermodal</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus commodi doloribus earum magnam repellat voluptates sed,
            facere quibusdam a voluptas?
          </p>
          <HomeRqsBtn>
            <Link to={"/rqt-quote"}>Request A Quote</Link>{" "}
          </HomeRqsBtn>
        </FtlDisplayContent>
      </FtlDisplay>
      <FtlDescContainer>
        <FtlDescContent>
          <img src={Train} alt="" />
          <FtlDesTab>
            <p>Added Transport Capacity...</p>
          </FtlDesTab>
        </FtlDescContent>
        <FtlDescContent>
          <p>
            Incredible Facts about{" "}
            <span>Intermodal Service at XelaExports</span>
          </p>
          <p>
            With substantial years of experience, XelaExports has a quite
            flawless record with:
          </p>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam a omnis quisquam magni harum.
            </p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam a omnis quisquam magni harum.
            </p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam a omnis quisquam magni harum.
            </p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam a omnis quisquam magni harum.
            </p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              aliquam a omnis quisquam magni harum.
            </p>
          </div>
        </FtlDescContent>
      </FtlDescContainer>
      <FtlWorksContainer>
        <img src={TruckInTunnel} alt="" />
        <FtlWorksContent>
          <p>How It Works...</p>
          <FtlWorksStepsContainer style={{ flexDirection: "column" }}>
            <div className="FtlWorksStepsTab">
              <FtlWorksStepsTab>
                <p>01</p>
                <p>Shipper</p>
              </FtlWorksStepsTab>
              <FtlWorksStepsTab>
                <p>02</p>
                <p>Origin Dray</p>
              </FtlWorksStepsTab>
              <FtlWorksStepsTab>
                <p>03</p>
                <p>On The Rail</p>
              </FtlWorksStepsTab>
              <FtlWorksStepsTab>
                <p>04</p>
                <p>Destination Dray</p>
              </FtlWorksStepsTab>
              <FtlWorksStepsTab>
                <p>05</p>
                <p>Receiver</p>
              </FtlWorksStepsTab>
            </div>
            <img src={ShipperChart} alt="" />
          </FtlWorksStepsContainer>
        </FtlWorksContent>
      </FtlWorksContainer>
      <FtlMoreInfoContainer>
        <FtlMoreInfoTab>
          <p>
            Intermodal <span>Services </span>
          </p>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>containerized rail transportation</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>train freight</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>bulk transportation</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>long-haul freight</p>
          </div>
        </FtlMoreInfoTab>
        <FtlMoreInfoTab>
          <img src={TruckTwo} alt="" />
        </FtlMoreInfoTab>
      </FtlMoreInfoContainer>
      <FtlMoreInfoContainer>
        <FtlMoreInfoContent>
          <img src={TrainLandscape} alt="" />
          <p>Here to Cater for Your Transportation Needs</p>
          <HomeRqsBtn>
            <Link to={"/rqt-quote"}>Request A Quote</Link>
          </HomeRqsBtn>
        </FtlMoreInfoContent>
      </FtlMoreInfoContainer>
    </FtlContainer>
  );
};

export default Intermodal;
