import styled from "styled-components";
import { Centering, colors } from "./UniversalStyle";

export const FooterContainer = styled.div`
  width: 100%;
  height: 70%;
  background: ${colors.footerColor};
  color: ${colors.baseColor};
  display: flex;
  padding: 10px;
  padding-top: 5%;
  @media screen and (max-width: 990px) {
    height: auto;
    gap: 30px;
    flex-direction: column;
    margin-top: auto;
  }
`;

export const FooterSocialLinkContainer = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  gap: 10%;
  margin-top: auto;
  @media screen and (max-width: 990px) {
    gap: 20px;
    margin-top: 15px;
  }
`;

export const FooterSocialLink = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${colors.accentColor};
  padding: 10px;
  background: ${colors.mainColor};
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const FooterRqsLink = styled.div`
  width: 75%;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  background: ${colors.mainColor};
  font-weight: 700;
  & > a {
    margin: 0;
    text-decoration: none;
    font-weight: 500;
    color: ${colors.baseColor};
  }
  &:hover {
    border: 2px solid ${colors.accentColor};
  }
  @media screen and (max-width: 990px) {
    width: 60%;
  }
`;

export const FooterLinkContainer = styled.div`
  width: fit-content;
  height: 85%;
  padding-left: 3%;
  padding-right: 3%;
  display: flex;
  flex-direction: column;
  position: relative;
  &::after {
    content: "";
    height: 62%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 15%;
    background-color: rgba(11, 243, 235, 0.25);
  }
  &:first-child {
    width: 20%;
    ${Centering}
    padding-left: 1%;
    padding-right: 2%;
  }
  &:nth-child(2) {
    width: 25%;
  }
  &:nth-child(3) {
    width: 23%;
  }

  &:last-child {
    border: none;
  }
  &:last-child::after {
    content: "";
    height: 100%;
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    background-color: transparent;
  }
  @media screen and (max-width: 990px) {
    border: none;
    width: 85%;
    &:first-child {
      width: 85%;
      align-items: flex-start;
      padding-left: 10px;
      padding-right: 0;
    }
    &:nth-child(2),
    &:nth-child(3) {
      width: 85%;
    }
    &:nth-last-child(1),
    &:nth-last-child(2) {
      width: 85%;
    }
  }
`;

export const FooterHeaderLink = styled.div`
  width: 100%;
  margin-bottom: 5%;
  height: fit-content;
  font-size: 3.3vh;
  font-weight: 600;
  -webkit-text-stroke-width: 0.7px;
  -webkit-text-fill-color: ${colors.secondaryColor};
  -webkit-text-stroke-color: #0bf3eb;
  @media screen and (max-width: 990px) {
    text-align: start;
  }
`;

export const FooterModeLink = styled.div`
  width: 100%;
  @media screen and (max-width: 990px) {
    margin: 0;
  }
`;

export const FooterSubLink = styled.div`
  width: 100%;
  height: 80%;
  font-weight: 400;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const FooterLink = styled.div`
  font-size: 2.5vh;
  & > a {
    margin: 0;
    text-decoration: none;
    color: #fff;
  }
`;

export const FooterContactLinkContainer = styled.div`
  width: 80%;
  height: 60%;
  text-align: center;
  ${Centering}
  justify-content: flex-start;
  color: ${colors.baseColor};
  background: ${colors.footerColor};
  @media screen and (max-width: 990px) {
    text-align: start;
    margin-top: 20px;
  }
`;

export const FooterContactLink = styled.div`
  width: 100%;
  & > p > a {
    text-decoration: none;
    margin: 0;
    color: ${colors.baseColor};
  }
`;

export const FooterBaseLinkContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  align-items: center;
  background: #0a0a0a;
  color: #fff;
`;

export const FooterBaseLink = styled.div`
  width: fit-content;
  font-size: 14px;
  padding-left: 10px;
  border-right: 1px solid rgba(11, 243, 235, 0.1);
  padding-right: 10px;
  height: 50%;
  &:last-child {
    border: none;
  }
  &:first-child {
    margin-left: 20%;
  }
  @media screen and (max-width: 990px) {
    width: fit-content;
    font-size: 14px;
    padding: 0px;
    ${Centering}
    height: 50%;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 12px;
    &:first-child {
      margin-left: 10px;
    }
  }
`;
