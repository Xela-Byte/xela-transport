import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import {
  HomeChooseContainer,
  HomeChooseImageTab,
  HomeChooseTab,
  HomeChooseTabContainer,
  HomeChooseText,
  HomeContainer,
  HomeContent,
  HomeDedicate,
  HomeDedicateContent,
  HomeDescService,
  HomeDescText,
  HomeDisplayImage,
  HomeHeaderText,
  HomeIntroContainer,
  HomeIntroContent,
  HomeIntroTab,
  HomeIntroTabContainer,
  HomeRqsBtn,
  HomeRqsBtnContainer,
  HomeVideoContainer,
  HomeVideoDesc,
  HomeVideoDescText,
  HomeVideoSection,
  HomeVideoTab,
} from "../styled/Home";
import HomeDisplayImg from "../assets/cargo.jpg";
import HomeDisplayPhoneImg from "../assets/cargo_phone.jpg";
import useGetWindowSize from "../hooks/useWindowSize";
import { Link, useNavigate } from "react-router-dom";
import Trailer from "../assets/trailer.svg";
import Cargo from "../assets/cargo-2.jpg";
import TrailerTab from "../components/FullTruckTab";
import IntermodalTab from "../components/IntermodalTab";
import LessTruckTab from "../components/LessTruckTab";
import AirTab from "../components/AirTab";
import DrayageTab from "../components/DrayageTab";
import OceanTab from "../components/OceanTab";
import Shield from "../assets/shield.svg";
import FastTruck from "../assets/fast-truck.svg";
import Location from "../assets/location.svg";
import Cup from "../assets/cup.svg";
import HomeMobile from "../components/HomeMobile";
import { motion, AnimatePresence } from "framer-motion";
import { fadeAnimation } from "../animationVariants/fadeVariant";
import {
  boxAnimation,
  reverseBoxAnimation,
} from "../animationVariants/boxVariant";
import { Banner, colors } from "../styled/UniversalStyle";
import FullTruck from "../assets/full-truck.svg";
import Ship from "../assets/ship.svg";
import Plane from "../assets/plane.svg";
import Ocean from "../assets/ocean.svg";
import Drayage from "../assets/dump-truck.svg";

const Home = () => {
  document.title = "XelaExports | Home";
  const windowWidth = useGetWindowSize().innerWidth;
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("trailer");
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
    <>
      {windowWidth > 990 ? (
        <>
          <HomeContainer>
            <HomeDisplayImage
              src={windowWidth > 990 ? HomeDisplayImg : HomeDisplayPhoneImg}
              alt=""
            />
            <HomeContent
              as={motion.div}
              variants={fadeAnimation}
              initial="initial"
              whileInView="animate"
            >
              <HomeHeaderText>XelaExports</HomeHeaderText>
              <HomeDescText>
                Logistics Services, Truckloads and much more at your
                fingertips...
              </HomeDescText>
              <HomeRqsBtnContainer>
                <HomeRqsBtn
                  style={{
                    background: `${colors.buttonColor}`,
                  }}
                >
                  <Link to={"/rqt-quote"} style={{ color: "black" }}>
                    Request A Quote
                  </Link>
                </HomeRqsBtn>
              </HomeRqsBtnContainer>
            </HomeContent>
          </HomeContainer>
          <HomeIntroContainer>
            <HomeIntroContent
              as={motion.div}
              variants={boxAnimation}
              initial="initial"
              whileInView="animate"
            >
              <HomeIntroTabContainer>
                <HomeIntroTab
                  onClick={() => {
                    handleActiveTab("full-truck");
                    navigate("/ftl");
                  }}
                >
                  <img src={FullTruck} alt="" />
                  <p> Full Truckload</p>
                </HomeIntroTab>
                <HomeIntroTab onClick={() => handleActiveTab("less-truck")}>
                  <img src={Trailer} alt="" />
                  <p>Less Than Truckload</p>
                </HomeIntroTab>
                <HomeIntroTab
                  onClick={() => {
                    handleActiveTab("intermodal");
                    navigate("/intermodal");
                  }}
                >
                  <img src={Ship} alt="" />
                  <p>Intermodal</p>
                </HomeIntroTab>
                <HomeIntroTab onClick={() => handleActiveTab("drayage")}>
                  <img src={Drayage} alt="" />
                  <p>Drayage</p>
                </HomeIntroTab>
                <HomeIntroTab onClick={() => handleActiveTab("air")}>
                  <img src={Plane} alt="" />
                  <p>Air</p>
                </HomeIntroTab>
                <HomeIntroTab onClick={() => handleActiveTab("ocean")}>
                  <img src={Ocean} alt="" />
                  <p>Ocean</p>
                </HomeIntroTab>
              </HomeIntroTabContainer>
              <HomeDescService>{tab}</HomeDescService>
            </HomeIntroContent>
          </HomeIntroContainer>
          <Banner />
          <HomeDedicate>
            <img src={Cargo} alt="cargo" />
            <HomeDedicateContent>
              <p>
                WE ARE DEDICATED TO PROVIDING THE <br /> BEST SERVICES AT THE
                LOWEST POSSIBLE COST{" "}
              </p>
              <Link to={"/"}>Read More</Link>
            </HomeDedicateContent>
          </HomeDedicate>
          <HomeChooseContainer>
            <HomeChooseText>
              Why Choose Us
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                modi voluptas recusandae iste a consequuntur, aliquid similique
                quis tempore maiores blanditiis ex repellat sed cupiditate totam
                optio sequi corrupti? Odit.
              </p>
            </HomeChooseText>
            <AnimatePresence>
              <HomeChooseTabContainer>
                <HomeChooseTab
                  as={motion.div}
                  variants={fadeAnimation}
                  initial="initial"
                  whileInView="animate"
                >
                  <HomeChooseImageTab>
                    <img src={Shield} alt="" />
                  </HomeChooseImageTab>
                  SECURE
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores magni illum eum laboriosam, laudantium harum.
                  </p>
                </HomeChooseTab>
                <HomeChooseTab
                  as={motion.div}
                  variants={fadeAnimation}
                  initial="initial"
                  whileInView="animate"
                >
                  <HomeChooseImageTab>
                    <img src={FastTruck} alt="" />
                  </HomeChooseImageTab>
                  FAST DELIVERY
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                    fugit dolor non, officia corrupti delectus.
                  </p>
                </HomeChooseTab>
                <HomeChooseTab
                  as={motion.div}
                  variants={fadeAnimation}
                  initial="initial"
                  whileInView="animate"
                >
                  <HomeChooseImageTab>
                    <img src={Location} alt="" />
                  </HomeChooseImageTab>
                  TRACKABLE
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Suscipit officia esse, quibusdam fugit minus voluptates.
                  </p>
                </HomeChooseTab>
                <HomeChooseTab
                  as={motion.div}
                  variants={fadeAnimation}
                  initial="initial"
                  whileInView="animate"
                >
                  <HomeChooseImageTab>
                    <img src={Cup} alt="" />
                  </HomeChooseImageTab>
                  RELIABLE
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam, voluptatum. Ut aliquid soluta illo optio.
                  </p>
                </HomeChooseTab>
              </HomeChooseTabContainer>
            </AnimatePresence>
          </HomeChooseContainer>
          <Banner />
          <HomeVideoSection>
            <HomeVideoDesc
              as={motion.div}
              variants={boxAnimation}
              initial="initial"
              whileInView="animate"
            >
              <HomeVideoDescText>Watch the video and take</HomeVideoDescText>
              <HomeVideoDescText>some idea about our company</HomeVideoDescText>
              <HomeVideoDescText>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et
                facilis, esse ex culpa quae ipsam? Quisquam, earum inventore!
                Officia, fuga!
              </HomeVideoDescText>
            </HomeVideoDesc>
            <HomeVideoContainer
              as={motion.div}
              variants={reverseBoxAnimation}
              initial="initial"
              whileInView="animate"
            >
              <HomeVideoTab>
                <LiteYouTubeEmbed
                  id="u6GIL2lkra0"
                  title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
                />
              </HomeVideoTab>
            </HomeVideoContainer>
          </HomeVideoSection>
        </>
      ) : (
        <HomeMobile />
      )}
    </>
  );
};

export default Home;
