import styled from "styled-components";
import { Centering, colors } from "./UniversalStyle";

export const NavBarContainer = styled.div`
  width: 100%;
  height: 15%;
  padding: 10px;
  display: flex;
  border-top: 1.5px solid #eee;
  z-index: 999;
  @media screen and (max-width: 990px) {
    position: relative;
    height: 70px;
  }
`;

export const NavBarLogo = styled.img`
  width: 100px;
  object-fit: cover;
  height: 100%;
  @media screen and (max-width: 990px) {
    width: 80px;
    height: 100%;
    margin-top: -5px;
    object-fit: cover;
  }
`;

export const NavContact = styled.div`
  width: 15%;
  padding-left: 20px;
  ${Centering}
  align-items: flex-start;
  font-size: 13px;
  flex-direction: column;
  & > p > a {
    font-size: 20px;
    margin: 0;
    text-decoration: none;
  }
  @media screen and (max-width: 990px) {
    padding-left: 5px;
    font-size: 14px;
    & > p > a {
      font-size: 18px;
      margin: 0;
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const NavLinkTabContainer = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 20%;
  gap: 20px;
  ${Centering}
`;

export const NavLinkTab = styled.div`
  width: fit-content;
  cursor: pointer;
  padding: 10px;
  color: black;
  text-transform: uppercase;
  & > p:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: ${colors.accentColor};
  }
  & > a {
    margin: 0;
    text-decoration: underline;
    font-weight: 500;
    color: ${colors.baseColor};
  }
`;

export const NavBarTabContainer = styled.div`
  width: 100%;
  padding: 2px;
  background: #eee;
`;

export const NavBarTab = styled.div`
  width: fit-content;
  cursor: pointer;
  color: #0000f7;
  padding-right: 15px;
  border-right: 1px solid ${colors.mainColor};
  & > a {
    margin: 0;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    text-transform: uppercase;
    color: ${colors.secondaryColor};
  }
  & > a:hover {
    text-decoration: underline;
  }
  &:last-child {
    border: none;
  }
`;

export const stickyNavBar = {
  position: "fixed",
  top: 0,
  borderBottom: "1px solid black",
  background: "#fcfcfc",
  width: "100vw",
  height: "12%",
  borderTop: 0,
  smallHeight: "70px",
  marginBottom: "25%",
  dropdown: "5px",
};

export const NavIconImg = styled.img`
  margin-left: auto;
  width: 30px;
  height: 30px;
  align-self: center;
`;

export const CollapsibleNavbarContainer = styled.div`
  z-index: 998;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: ${colors.footerColor};
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0px 0px 0px;
`;

export const CollapsibleNavbarTab = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  font-size: 23px;
  font-weight: 700;
  border-bottom: 1px solid #eee;
  color: ${colors.baseColor};
`;

export const CollapsibleNavbarTabContent = styled.div`
  width: 100%;
  height: fit-content;
  padding: 10px;
  border-bottom: 1px solid #eee;
  color: ${colors.baseColor};
  font-size: 16px;
  & > p > a {
    color: ${colors.baseColor};
    text-decoration: none;
    font-weight: 500;
    margin: 0;
  }
`;

export const CollapsibleNavbarTabSubContent = styled.div`
  width: 100%;
  padding-top: 5%;
  font-size: 25px;
  font-weight: 600;
  & > p {
    font-weight: 500;
    font-size: 20px;
  }
`;

export const CollapsibleNavbarTabIcon = styled.img`
  align-self: center;
  justify-self: center;
`;
