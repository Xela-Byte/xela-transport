import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  AboutUsContainer,
  AboutUsDesc,
  AboutUsDisplay,
  AboutUsDisplayContent,
  AboutUsDescContent,
  AboutUsService,
  AboutUsServiceTab,
  AboutUsManagement,
  AboutUsTeam,
  AboutUsMoreContainer,
  AboutUsMoreDisplay,
  AboutUsMoreDisplayContent,
  ConnectBtn,
} from "../styled/AboutUs";

import AboutUsOverlay from "../assets/cargo.jpg";
import MovingTruck from "../assets/moving-truck.jpg";
import Plane from "../assets/plane.svg";
import DumpTruck from "../assets/dump-truck.svg";
import Trailer from "../assets/full-truck.svg";

import ArrowLeft from "../assets/arrow-left.svg";
import ArrowRight from "../assets/arrow-right-carousel.svg";

import { TeamProfile } from "../utils/Team";
import { Link } from "react-router-dom";
import useGetWindowWidth from "../hooks/useWindowSize";

const AboutUs = () => {
  const windowWidth = useGetWindowWidth().innerWidth;
  return (
    <>
      <AboutUsContainer>
        <AboutUsDisplay>
          <img src={AboutUsOverlay} alt="" />
          <AboutUsDisplayContent>About Us</AboutUsDisplayContent>
        </AboutUsDisplay>
      </AboutUsContainer>
      <AboutUsDesc>
        <AboutUsDescContent>
          <p>
            XelaExports <br /> Around <span>the World.</span>
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
          <p>global sustainable market leader</p>
          <p>
            We integrate new technological and digital advances to create value.
          </p>
        </AboutUsServiceTab>
        <AboutUsServiceTab>
          <img src={DumpTruck} alt="" />
          <p>relentless productivity driver</p>
          <p>
            We integrate new technological and digital advances to create value.
          </p>
        </AboutUsServiceTab>
        <AboutUsServiceTab>
          <img src={Trailer} alt="" />
          <p>
            proud to deliver excellence. <br />
            every time
          </p>
          <p>
            We integrate new technological and digital advances to create value.
          </p>
        </AboutUsServiceTab>
      </AboutUsService>
      <AboutUsManagement>
        <p>
          Our Board of <span>Management</span>
        </p>
        <p>
          XelaExports is the world's driving worldwide coordinations supplier
          <br /> — we uphold industry and exchange the worldwide trade of
          merchandise through land transport.
        </p>
        <Swiper
          className="SwiperComponent"
          loop="true"
          direction="horizontal"
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={windowWidth > 990 ? 3 : 1}
          navigation={{
            prevEl: ".SwiperPrevBtn",
            nextEl: ".SwiperNextBtn",
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slideChange")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {TeamProfile.map((team) => {
            const { id, name, position, avatar } = team;
            return (
              <SwiperSlide>
                <AboutUsTeam key={id}>
                  <img src={avatar} alt="" />
                  <p>{name}</p>
                  <p>{position}</p>
                </AboutUsTeam>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="SwiperBtns">
          <div className="SwiperPrevBtn">
            <img src={ArrowLeft} alt="" />
          </div>
          <div className="SwiperNextBtn">
            <img src={ArrowRight} alt="" />
          </div>
        </div>
      </AboutUsManagement>
      <AboutUsMoreContainer>
        <AboutUsMoreDisplay>
          <img src={AboutUsOverlay} alt="" />
          <AboutUsMoreDisplayContent>
            <p>XelaExports</p>
            <p>
              World's Leading Contract <br /> Logistics Provider
            </p>
            <ConnectBtn>
              <Link to={"/contact"} style={{ color: "black" }}>
                Connect With Us
              </Link>
            </ConnectBtn>
          </AboutUsMoreDisplayContent>
        </AboutUsMoreDisplay>
      </AboutUsMoreContainer>
    </>
  );
};

export default AboutUs;
