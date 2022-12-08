import { Link } from "react-router-dom";
import {
  FooterBaseLink,
  FooterBaseLinkContainer,
  FooterContactLink,
  FooterContactLinkContainer,
  FooterContainer,
  FooterHeaderLink,
  FooterLink,
  FooterLinkContainer,
  FooterModeLink,
  FooterRqsLink,
  FooterSocialLink,
  FooterSocialLinkContainer,
  FooterSubLink,
} from "../styled/Footer";
import { colors } from "../styled/UniversalStyle";
import Facebook from "../assets/fb.svg";
import Instagram from "../assets/ig.svg";
import LinkedIn from "../assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLinkContainer>
          <FooterRqsLink
            style={{
              background: `${colors.buttonColor}`,
            }}
          >
            <Link to={"/rqt-quote"} style={{ color: "black" }}>
              Request A Quote
            </Link>
          </FooterRqsLink>
          <FooterContactLinkContainer>
            <FooterContactLink>
              <p>Contact Us</p>
              <p>
                <a href="tel:8183139166">818-313-9166</a>
              </p>
            </FooterContactLink>
          </FooterContactLinkContainer>
          <FooterSocialLinkContainer>
            <FooterSocialLink>
              <img src={Facebook} alt="" />
            </FooterSocialLink>
            <FooterSocialLink>
              <img src={Instagram} alt="" />
            </FooterSocialLink>
            <FooterSocialLink>
              <img src={LinkedIn} alt="" />
            </FooterSocialLink>
          </FooterSocialLinkContainer>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterHeaderLink>Logistitcs Services</FooterHeaderLink>
          <FooterModeLink>
            <FooterLink>Mode</FooterLink>
          </FooterModeLink>
          <FooterSubLink>
            <FooterLink>Logistics Services</FooterLink>
            <FooterLink>
              <Link to={"/ftl"}>Full Truckload</Link>
            </FooterLink>
            <FooterLink>Less Than Truckload</FooterLink>
            <FooterLink>
              <Link to={"/intermodal"}>Intermodal</Link>
            </FooterLink>
            <FooterLink>Drayage</FooterLink>
            <FooterLink>Air</FooterLink>
            <FooterLink>Ocean</FooterLink>
          </FooterSubLink>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterHeaderLink>Specialized Services</FooterHeaderLink>
          <FooterSubLink>
            <FooterLink>Drop Trailer</FooterLink>
            <FooterLink>Oversize/Overweight</FooterLink>
            <FooterLink>Partials</FooterLink>
            <FooterLink>Warehousing</FooterLink>
            <FooterLink>Customs Brokerage</FooterLink>
            <FooterLink>Mexico Cross-Border</FooterLink>
            <FooterLink>Canada Services</FooterLink>
          </FooterSubLink>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterHeaderLink>Carriers</FooterHeaderLink>
          <FooterSubLink>
            <FooterLink>Carriers</FooterLink>
            <FooterLink>Get Set Up</FooterLink>
            <FooterLink>FAQs</FooterLink>
          </FooterSubLink>
        </FooterLinkContainer>
        <FooterLinkContainer>
          <FooterHeaderLink>About Us</FooterHeaderLink>
          <FooterSubLink>
            <FooterLink> About Us</FooterLink>
            <FooterLink>Mission</FooterLink>
            <FooterLink>Culture</FooterLink>
            <FooterLink>Industry</FooterLink>
          </FooterSubLink>
        </FooterLinkContainer>
      </FooterContainer>

      <FooterBaseLinkContainer>
        <FooterBaseLink>
          <p>©2022 XelaExports</p>
        </FooterBaseLink>
        <FooterBaseLink>
          <p>PRIVACY</p>
        </FooterBaseLink>
        <FooterBaseLink>
          <p>TERMS</p>
        </FooterBaseLink>
      </FooterBaseLinkContainer>
    </>
  );
};

export default Footer;
