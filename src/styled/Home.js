import styled from "styled-components";
import { Centering, colors } from "../styled/UniversalStyle";

export const HomeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  @media screen and (max-width: 990px) {
    height: 50%;
  }
`;

export const HomeContent = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 10%;
  z-index: 9;
  position: relative;
  color: ${colors.baseColor};
  ${Centering}
  gap: 5%;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 990px) {
    justify-content: center;
  }
`;

export const HomeDisplayImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  @media screen and (max-width: 990px) {
    height: 50%;
    object-fit: fill;
  }
`;

export const HomeHeaderText = styled.p`
  font-size: 7vh;
  margin-top: -5%;
  text-transform: uppercase;
  @media screen and (max-width: 990px) {
    font-size: 5.5vh;
    text-align: center;
  }
`;

export const HomeDescText = styled.p`
  margin-top: 2%;
  font-size: 3vh;
  @media screen and (max-width: 990px) {
    text-align: center;
  }
`;

export const HomeRqsBtnContainer = styled.div`
  width: 30%;
  ${Centering}
  margin-top: 12%;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const HomeRqsBtn = styled.div`
  width: 200px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  background: ${colors.buttonColor};
  & > a {
    margin: 0;
    text-decoration: none;
    font-weight: 500;
    color: ${colors.footerColor};
  }
  &:hover {
    border: 2px solid ${colors.accentColor};
  }
`;

export const HomeIntroContainer = styled.div`
  width: 100%;
  height: 65vh;
  ${Centering}
  overflow-x: hidden;
  gap: 3%;
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const HomeIntroContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  background: #eee;
  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

export const HomeIntroTabContainer = styled.div`
  display: flex;
  gap: 0.5%;
  height: 30%;
  width: 100%;
`;

export const HomeIntroTab = styled.div`
  height: 100%;
  width: 33%;
  background: #e4e3e3;
  cursor: pointer;
  border: 2px solid ${colors.accentColor};
  text-align: center;
  padding-top: 2%;
  & > img {
    width: 50%;
    height: 50%;
  }
  & > p {
    text-align: center;
  }
`;

export const HomeDescService = styled.div`
  width: 100%;
  padding: 2%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background: ${colors.mainColor};
  }
`;

export const HomeTab = styled.div`
  color: ${colors.mainColor};
  font-weight: 600;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & > p {
    font-weight: 500;
    color: ${colors.footerColor};
  }
`;

export const HomeAbout = styled.div`
  width: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background: ${colors.mainColor};
  }
`;

export const HomeAboutText = styled.p`
  font-size: 3.5vh;
  color: ${colors.mainColor};
  font-weight: 600;
  &:nth-last-child(2) {
    font-size: 3vh;
    color: ${colors.footerColor};
    font-weight: 500;
  }
  &:last-child {
    font-size: 2.5vh;
    font-weight: 500;
  }
`;

export const HomeDedicate = styled.div`
  width: 100%;
  overflow: hidden;
  height: 100%;
  ${Centering}
  position: relative;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    @media screen and (max-width: 990px) {
      object-fit: fill;
    }
  }
`;

export const HomeDedicateContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: relative;
  color: ${colors.baseColor};
  ${Centering}
  padding-bottom: 10px;
  flex-direction: column;
  & > p {
    margin-top: 35%;
    font-size: 7vh;
    text-align: center;
  }
`;

export const HomeChooseContainer = styled.div`
  width: 100%;
  height: 80%;
  padding-top: 5%;
  /* border: solid; */
  ${Centering}
  flex-direction: column;
  align-items: flex-start;
`;

export const HomeChooseText = styled.div`
  width: 80%;
  margin: auto;
  height: 20%;
  font-size: 4vh;
  color: ${colors.mainColor};
  font-weight: 600;
  text-align: center;
  ${Centering}
  flex-direction: column;
  gap: 5%;
  & > p {
    font-size: 3vh;
    font-weight: 500;
    color: ${colors.footerColor};
  }
`;

export const HomeChooseTabContainer = styled.div`
  width: 100%;
  height: 70%;
  ${Centering}
  gap: 3%;
`;

export const HomeChooseTab = styled.div`
  width: 23%;
  height: 90%;
  text-align: center;
  & > p {
    margin: 10px;
  }
`;

export const HomeChooseImageTab = styled.div`
  width: 50%;
  margin: 10px auto;
  height: 30%;
  ${Centering}
  border: 2px solid ${colors.mainColor};
  flex-direction: column;
  border-radius: 5px;

  & > img {
    width: 90%;
    height: 90%;
  }
`;

export const HomeVideoSection = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  overflow-x: hidden;
  gap: 5%;
`;

export const HomeVideoDesc = styled.div`
  width: 40%;
  height: 100%;
  padding: 2.5%;
`;

export const HomeVideoDescText = styled.p`
  text-transform: capitalize;

  &:first-child {
    font-weight: 400;
    font-size: 5vh;
  }
  &:nth-last-child(2) {
    font-size: 3vh;
    font-weight: 600;
    color: ${colors.mainColor};
  }
  &:last-child {
    margin-top: 5%;
    font-size: 2.5vh;
  }
`;

export const HomeVideoContainer = styled.div`
  width: 55%;
  height: 100%;
  ${Centering}
`;

export const HomeVideoTab = styled.div`
  width: 80%;
`;
