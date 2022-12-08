import {
  AboutUsContainer,
  AboutUsDesc,
  AboutUsDisplay,
  AboutUsDisplayContent,
  AboutUsDescContent,
  AboutUsService,
  AboutUsServiceTab,
  AboutUsMoreContainer,
  AboutUsMoreDisplay,
  AboutUsMoreDisplayContent,
  ConnectBtn,
} from "../styled/AboutUs";

import AboutUsOverlay from "../assets/cargo-2.jpg";
import MovingTruck from "../assets/moving-truck-2.jpg";
import Plane from "../assets/plane.svg";
import DumpTruck from "../assets/dump-truck.svg";
import Trailer from "../assets/full-truck.svg";

import { Link } from "react-router-dom";
import { colors } from "../styled/UniversalStyle";
import { MissionContainer } from "../styled/Mission";

const Mission = () => {
  return (
    <>
      <AboutUsContainer>
        <AboutUsDisplay>
          <img src={AboutUsOverlay} alt="" />
          <AboutUsDisplayContent>Our Mission</AboutUsDisplayContent>
        </AboutUsDisplay>
      </AboutUsContainer>
      <AboutUsDesc>
        <AboutUsDescContent>
          <p>
            We Strive to Become the Leading Partner <span>in Logistics</span>{" "}
          </p>
          <p>
            XelaExports is the world's driving worldwide coordinations supplier
            — we uphold industry and exchange the worldwide trade of merchandise
            through land transport.
          </p>
          <p>
            Our worth added administrations guarantee the progression of
            products proceeds consistently and supply chains stay lean and
            streamlined for progress.
          </p>
        </AboutUsDescContent>
        <AboutUsDescContent>
          <img src={MovingTruck} alt="" />
        </AboutUsDescContent>
      </AboutUsDesc>
      <AboutUsService>
        <AboutUsServiceTab>
          <img src={Plane} alt="" />
          <p>air freight</p>
          <p>
            <span
              style={{
                fontSize: "23px",
                fontWeight: 600,
                color: colors.mainColor,
              }}
            >
              80%{" "}
            </span>
            with the best and honest reviews.
          </p>
        </AboutUsServiceTab>
        <AboutUsServiceTab>
          <img src={DumpTruck} alt="" />
          <p>land transport</p>
          <p>
            <span
              style={{
                fontSize: "23px",
                fontWeight: 600,
                color: colors.mainColor,
              }}
            >
              95%{" "}
            </span>
            with tons of truckloads delivered.
          </p>
        </AboutUsServiceTab>
        <AboutUsServiceTab>
          <img src={Trailer} alt="" />
          <p>ocean freight</p>
          <p>
            <span
              style={{
                fontSize: "23px",
                fontWeight: 600,
                color: colors.mainColor,
              }}
            >
              90%{" "}
            </span>
            with low chances of perishability.
          </p>
        </AboutUsServiceTab>
      </AboutUsService>
      <AboutUsMoreContainer>
        <AboutUsMoreDisplay>
          <img src={AboutUsOverlay} alt="" />
          <AboutUsMoreDisplayContent>
            <p style={{ fontSize: "5vh" }}>
              We Provide Key Guidance <br /> in the Long-term Business Dealings
            </p>
            <ConnectBtn>
              <Link to={"/rqt-quote"} style={{ color: "black" }}>
                Request A Quote
              </Link>
            </ConnectBtn>
          </AboutUsMoreDisplayContent>
        </AboutUsMoreDisplay>
      </AboutUsMoreContainer>
      <MissionContainer />
    </>
  );
};

export default Mission;
