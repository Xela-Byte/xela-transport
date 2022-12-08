import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
  HomeDescTab,
  HomeMobileAboutUsText,
  HomeMobileChoose,
  HomeMobileChooseTab,
  HomeMobileChooseTabContainer,
  HomeMobileContainer,
  HomeMobileDedicate,
  HomeMobileDedicateContent,
  HomeMobileDescText,
  HomeMobileImage,
  HomeMobileImageContainer,
  HomeMobileImageContent,
  HomeMobileVideoSection,
  HomeMobileVideoText,
  HomeRqsBtnContainer,
  HomeServiceContainer,
  HomeServiceTab,
  HomeServiceTabContainer,
} from "../styled/HomeMobile";
import FastTruck from "../assets/fast-truck.svg";
import CargoMobile from "../assets/cargo_phone.jpg";
import { HomeRqsBtn } from "../styled/Home";
import { Link, useNavigate } from "react-router-dom";
import TrailerTab from "./FullTruckTab";
import IntermodalTab from "./IntermodalTab";
import LessTruckTab from "./LessTruckTab";
import AirTab from "./AirTab";
import DrayageTab from "./DrayageTab";
import OceanTab from "./LessTruckTab";
import CargoTwo from "../assets/cargo-2.jpg";
import Location from "../assets/location.svg";
import Cup from "../assets/cup.svg";
import Shield from "../assets/shield.svg";
import { motion } from "framer-motion";
import { fadeAnimation } from "../animationVariants/fadeVariant";
import { boxAnimation } from "../animationVariants/boxVariant";

import FullTruck from "../assets/full-truck.svg";
import Trailer from "../assets/trailer.svg";
import Ship from "../assets/ship.svg";
import Plane from "../assets/plane.svg";
import Ocean from "../assets/ocean.svg";
import Drayage from "../assets/dump-truck.svg";
import { Banner } from "../styled/UniversalStyle";

const HomeMobile = () => {
  const [activeTab, setActiveTab] = useState("trailer");
  const navigate = useNavigate();
  let tab;

  const handleActiveTab = (tabContent) => {
    setActiveTab(tabContent);
  };

  switch (activeTab) {
    case "full-truck":
      tab = <TrailerTab />;
      break;
    case "less-truck":
      tab = <LessTruckTab />;
      break;
    case "air":
      tab = <AirTab />;
      break;
    case "drayage":
      tab = <DrayageTab />;
      break;
    case "ocean":
      tab = <OceanTab />;
      break;
    case "intermodal":
      tab = <IntermodalTab />;
      break;

    default:
      tab = <TrailerTab />;
      break;
  }
  return (
    <HomeMobileContainer>
      <HomeMobileImageContainer>
        <HomeMobileImage src={CargoMobile} alt="" />
        <HomeMobileImageContent
          as={motion.div}
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
        >
          <HomeMobileDescText>XelaExports</HomeMobileDescText>
          <HomeMobileDescText>
            Logistics Services, Truckloads and much more at your fingertips...
          </HomeMobileDescText>
          <HomeRqsBtnContainer>
            <HomeRqsBtn>
              <Link to={"/rqt-quote"}>Request A Quote</Link>
            </HomeRqsBtn>
          </HomeRqsBtnContainer>
        </HomeMobileImageContent>
      </HomeMobileImageContainer>
      <HomeServiceContainer
        as={motion.div}
        variants={boxAnimation}
        initial="initial"
        whileInView="animate"
      >
        <HomeServiceTabContainer>
          <HomeServiceTab
            onClick={() => {
              handleActiveTab("full-truck");
              navigate("/ftl");
            }}
          >
            <img src={FullTruck} alt="" />
            <p>Full Truckload</p>
          </HomeServiceTab>
          <HomeServiceTab onClick={() => handleActiveTab("less-truck")}>
            <img src={Trailer} alt="" />
            <p>Less Than Truckload</p>
          </HomeServiceTab>
          <HomeServiceTab
            onClick={() => {
              handleActiveTab("intermodal");
              navigate("/intermodal");
            }}
          >
            <img src={Ship} alt="" />
            <p>Intermodal</p>
          </HomeServiceTab>
        </HomeServiceTabContainer>
        <HomeServiceTabContainer>
          <HomeServiceTab onClick={() => handleActiveTab("drayage")}>
            <img src={Drayage} alt="" />
            <p>Drayage</p>
          </HomeServiceTab>
          <HomeServiceTab onClick={() => handleActiveTab("air")}>
            <img src={Plane} alt="" />
            <p>Air</p>
          </HomeServiceTab>
          <HomeServiceTab onClick={() => handleActiveTab("ocean")}>
            <img src={Ocean} alt="" />
            <p>Ocean</p>
          </HomeServiceTab>
        </HomeServiceTabContainer>
        <HomeDescTab>{tab}</HomeDescTab>
      </HomeServiceContainer>

      <Banner style={{ marginBottom: "120px" }} />

      <HomeMobileDedicate>
        <img src={CargoTwo} alt="" />
        <HomeMobileDedicateContent
          as={motion.div}
          variants={fadeAnimation}
          initial="initial"
          whileInView="animate"
        >
          <p>
            WE ARE DEDICATED TO PROVIDING THE <br /> BEST SERVICES AT THE LOWEST
            POSSIBLE COST{" "}
          </p>
        </HomeMobileDedicateContent>
      </HomeMobileDedicate>
      <HomeMobileChoose>
        <HomeMobileAboutUsText>Why Choose Us</HomeMobileAboutUsText>
        <HomeMobileAboutUsText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia modi
          voluptas recusandae iste a consequuntur, aliquid similique quis
          tempore maiores blanditiis ex repellat sed cupiditate totam optio
          sequi corrupti? Odit.
        </HomeMobileAboutUsText>
        <HomeMobileChooseTabContainer>
          <HomeMobileChooseTab
            as={motion.div}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
          >
            <img src={Shield} alt="" />
            SECURE
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur enim quidem expedita consequatur eos.
            </p>
          </HomeMobileChooseTab>
          <HomeMobileChooseTab
            as={motion.div}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
          >
            <img src={FastTruck} alt="" />
            FAST DELIVERY
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda harum, quis adipisci modi accusamus magni.
            </p>
          </HomeMobileChooseTab>
          <HomeMobileChooseTab
            as={motion.div}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
          >
            <img src={Location} alt="" />
            TRACKABLE
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              officiis reprehenderit reiciendis, iste sit ipsa nesciunt.
            </p>
          </HomeMobileChooseTab>
          <HomeMobileChooseTab
            as={motion.div}
            variants={fadeAnimation}
            initial="initial"
            whileInView="animate"
          >
            <img src={Cup} alt="" />
            RELIABLE
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              facere magni eius vel neque adipisci.
            </p>
          </HomeMobileChooseTab>
        </HomeMobileChooseTabContainer>
      </HomeMobileChoose>

      <Banner />

      <HomeMobileVideoSection>
        <HomeMobileVideoText>Watch the video and</HomeMobileVideoText>
        <HomeMobileVideoText>
          take some idea about our company
        </HomeMobileVideoText>
        <HomeMobileVideoText>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          quidem sunt accusantium deleniti tempora, aperiam distinctio
          asperiores doloribus dolorem. Blanditiis repellendus et ut totam?
        </HomeMobileVideoText>
        <LiteYouTubeEmbed
          id="u6GIL2lkra0"
          title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
        />
      </HomeMobileVideoSection>
    </HomeMobileContainer>
  );
};

export default HomeMobile;
