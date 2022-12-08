import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  NavBarContainer,
  NavBarLogo,
  NavContact,
  NavIconImg,
  NavLinkTab,
  NavLinkTabContainer,
} from "../styled/Navbar";
import Logo from "../assets/logo.jpg";
import NavbarTab from "./NavbarTab";
import NavIcon from "../assets/nav-icon.svg";
import useGetWindowWidth from "../hooks/useWindowSize";
import CollapsibleNavbar from "./CollapsibleNavbar";
import LgsService from "./LgsService";
import AboutUsDropdown from "./AboutUsDropdown";
import ContactUsDropdown from "./ContactUsDropdown";

const Navbar = ({ sticky }) => {
  const {
    position,
    top,
    width,
    background,
    height,
    borderTop,
    smallHeight,
    dropdown,
  } = sticky;

  const windowWidth = useGetWindowWidth().innerWidth;
  const [showNav, setShowNav] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDownContent, setDropDownContent] = useState(null);
  let dropdownContent;
  const handleNav = () => {
    setShowNav(!showNav);
  };
  const handleNavClose = () => {
    setShowNav(false);
  };
  const handleDropdownClose = () => {
    setShowDropDown(false);
  };
  const handleDropDown = (content) => {
    setShowDropDown(!showDropDown);
    setDropDownContent(content);
  };
  switch (dropDownContent) {
    case "logistics":
      dropdownContent = <LgsService />;
      break;
    case "about-us":
      dropdownContent = <AboutUsDropdown />;
      break;
    case "contact-us":
      dropdownContent = <ContactUsDropdown />;
      break;
    default:
      dropdownContent = "";
      break;
  }

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {windowWidth > 990 && <NavbarTab />}
      <NavBarContainer
        style={{
          position: position,
          width: width,
          top: top,
          height: windowWidth > 990 ? height : smallHeight,
          borderTop: borderTop,
          background: background,
        }}
      >
        <NavContact
          style={{
            marginLeft: windowWidth < 990 ? "30%" : "",
            width: windowWidth < 990 ? "40%" : "",
          }}
        >
          <p>Call Us 24/7/365</p>
          <p>
            <a href="tel:8183139166">818-313-9166</a>
          </p>
        </NavContact>

        {windowWidth > 990 && (
          <NavLinkTabContainer>
            <NavLinkTab
              onClick={() => {
                handleDropDown("logistics");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  handleDropdownClose();
                }, 3000);
                handleNavClose();
              }}
            >
              <p>Logistics Services</p>
            </NavLinkTab>
            <NavLinkTab
              onClick={() => {
                handleDropDown("about-us");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  handleDropdownClose();
                }, 3000);
                handleNavClose();
              }}
            >
              <p> About Us</p>
            </NavLinkTab>
            <NavLinkTab
              onClick={() => {
                handleDropDown("contact-us");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  handleDropdownClose();
                }, 3000);
                handleNavClose();
              }}
            >
              <p>Contact Us</p>
            </NavLinkTab>
          </NavLinkTabContainer>
        )}
        {windowWidth < 990 && (
          <NavIconImg src={NavIcon} alt="" onClick={() => handleNav()} />
        )}
      </NavBarContainer>
      <div
        style={{
          position: "absolute",
          top: scrolled ? "12vh" : "",
        }}
      >
        {windowWidth > 990 && showDropDown && dropdownContent}
      </div>
      {windowWidth < 990 && showNav ? <CollapsibleNavbar /> : ""}
    </>
  );
};

export default Navbar;
