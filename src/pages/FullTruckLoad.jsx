import {
  FtlContainer,
  FtlDescContainer,
  FtlDescContent,
  FtlDesTab,
  FtlDisplay,
  FtlDisplayContent,
  FtlInfoTab,
  FtlInfoTabContainer,
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
import Clock from "../assets/clock.png";
import Shield from "../assets/shield.png";
import Truck from "../assets/moving-truck-2.jpg";
import Correct from "../assets/correct.svg";
import TruckTwo from "../assets/moving-truck.jpg";
import TruckInTunnel from "../assets/truck-in-tunnel.jpg";
import MovingTruck from "../assets/moving-truck-3.jpg";
import { Link } from "react-router-dom";

const FullTruckLoad = () => {
  return (
    <FtlContainer>
      <FtlDisplay>
        <img src={FullTruck} alt="" />
        <FtlDisplayContent>
          <p>Full TruckLoad</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus commodi doloribus earum magnam repellat voluptates sed,
            facere quibusdam a voluptas?
          </p>
          <HomeRqsBtn>
            <Link to={"/rqt-quote"}>Request A Quote</Link>
          </HomeRqsBtn>
        </FtlDisplayContent>
      </FtlDisplay>
      <FtlInfoTabContainer>
        <FtlInfoTab>
          <img src={Clock} alt="" />
          <div className="ftlInfoContent">
            <p>Timely delivery of goods</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias, atque.
            </p>
          </div>
        </FtlInfoTab>
        <FtlInfoTab>
          <img src={Shield} alt="" />
          <div className="ftlInfoContent">
            <p>Insurance and shipment protection</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum,
              beatae?
            </p>
          </div>
        </FtlInfoTab>
      </FtlInfoTabContainer>
      <FtlDescContainer>
        <FtlDescContent>
          <img src={Truck} alt="" />
          <FtlDesTab>
            <p>Faster than you can imagine...</p>
          </FtlDesTab>
        </FtlDescContent>
        <FtlDescContent>
          <p>
            Powerful Features of <span>Full Truckload at XelaExports</span>
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
          <FtlWorksStepsContainer>
            <FtlWorksStepsTab>
              <p>01</p>
              <p>Listening to You</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptas, omnis minus. Ducimus magni odit quia.
              </p>
            </FtlWorksStepsTab>
            <FtlWorksStepsTab>
              <p>02</p>
              <p>Filling The Load Quote Form</p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo,
                minus necessitatibus amet vero similique officia.
              </p>
            </FtlWorksStepsTab>
            <FtlWorksStepsTab>
              <p>03</p>
              <p>Checking all details</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                laudantium quisquam fugit, explicabo cupiditate dignissimos!
              </p>
            </FtlWorksStepsTab>
            <FtlWorksStepsTab>
              <p>04</p>
              <p>Fast & efficient delivery</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Eveniet illo ullam modi odit placeat ex!
              </p>
            </FtlWorksStepsTab>
          </FtlWorksStepsContainer>
        </FtlWorksContent>
      </FtlWorksContainer>
      <FtlMoreInfoContainer>
        <FtlMoreInfoTab>
          <p>
            Full Truckload <span>Services </span>
          </p>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Dry Van</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Flatbed / Step Deck</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>temperature controlled fresh</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>temperature frozen</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>over dimensional</p>
          </div>
        </FtlMoreInfoTab>
        <FtlMoreInfoTab>
          <img src={TruckTwo} alt="" />
        </FtlMoreInfoTab>
      </FtlMoreInfoContainer>
      <FtlMoreInfoContainer>
        <FtlMoreInfoTab style={{ padding: "0" }}>
          <img src={MovingTruck} alt="" />
        </FtlMoreInfoTab>
        <FtlMoreInfoTab style={{ padding: "5%" }}>
          <p>
            Full Truckload <span>Capabilities </span>
          </p>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>High-Value / High-Risk</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Expedited / Team</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Drop Trailer</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Oversize / Overweight</p>
          </div>
          <div className="FtlFactors">
            <img src={Correct} alt="" />
            <p>Multi-Pick / Multi-Drop</p>
          </div>
        </FtlMoreInfoTab>
      </FtlMoreInfoContainer>
      <FtlMoreInfoContainer>
        <FtlMoreInfoContent>
          <img src={FullTruck} alt="" />
          <p>Excellent Transport and Quality Services</p>
          <HomeRqsBtn>
            <Link to={"/rqt-quote"}> Request A Quote</Link>
          </HomeRqsBtn>
        </FtlMoreInfoContent>
      </FtlMoreInfoContainer>
    </FtlContainer>
  );
};

export default FullTruckLoad;
