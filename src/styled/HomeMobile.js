import styled from "styled-components";
import { Centering, colors } from "./UniversalStyle";

export const HomeMobileContainer = styled.div`
  width: 100%;
`;

export const HomeMobileImageContainer = styled.div`
  width: 100%;
  height: 45%;
  margin-bottom: 25%;
  position: relative;
`;

export const HomeMobileImage = styled.img`
  width: 100%;
  height: 150%;
  object-fit: cover;
  position: absolute;
`;

export const HomeMobileImageContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 2%;
  padding-top: 25%;
  z-index: 9;
  gap: 5%;
  position: relative;
  text-align: center;
  color: ${colors.baseColor};
  ${Centering}
  justify-content: flex-start;
  flex-direction: column;
`;

export const HomeRqsBtnContainer = styled.div`
  width: 100%;
  margin-top: 10%;
  ${Centering}
`;

export const HomeMobileDescText = styled.p`
  margin-bottom: 5%;
  &:first-child {
    margin-top: -10%;
    font-size: 4.5vh;
  }
  &:last-child {
    font-size: 14px;
  }
`;

export const HomeServiceContainer = styled.div`
  width: 100%;
  height: 80%;
  background: #eee;
  margin-bottom: 50px;
`;

export const HomeServiceTabContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 0.5%;
  margin-bottom: 5px;
`;

export const HomeServiceTab = styled.div`
  width: 33%;
  background: #e4e3e3;
  ${Centering}
  cursor: pointer;
  padding: 5px;
  text-align: center;
  & > img {
    width: 50%;
    height: 50%;
  }
  font-size: 14px;
  flex-direction: column;
`;

export const HomeDescTab = styled.div`
  width: 100%;
  height: 70%;
  padding: 5%;
`;

export const HomeMobileAboutUs = styled.div`
  width: 100%;
  padding: 5%;
  margin-bottom: 100px;
`;

export const HomeMobileAboutUsText = styled.p`
  margin-bottom: 5%;
  &:first-child {
    font-size: 5vh;
    color: ${colors.mainColor};
  }
  &:last-child {
    font-size: 14px;
    color: ${colors.footerColor};
    font-weight: 400;
  }
`;

export const HomeMobileDedicate = styled.div`
  width: 100%;
  ${Centering}
  height: 45%;
  position: relative;
  & > img {
    width: 100%;
    position: absolute;
  }
`;

export const HomeMobileDedicateContent = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  z-index: 9;
  text-align: center;
  gap: 5%;
  position: relative;
  color: ${colors.baseColor};
  & > p {
    font-size: 3vh;
  }
  ${Centering}
`;

export const HomeMobileChoose = styled.div`
  width: 100%;
  margin-top: 25%;
  padding: 5%;
`;

export const HomeMobileChooseTabContainer = styled.div`
  width: 100%;
  margin-top: 10%;
`;

export const HomeMobileChooseTab = styled.div`
  width: 100%;
  ${Centering}
  & > img {
    width: 70px;
    height: 70px;
  }
  font-size: 18px;
  font-weight: 600;
  color: ${colors.mainColor};
  flex-direction: column;
  text-align: center;
  & > p {
    font-size: 14px;
    color: ${colors.footerColor};
    font-weight: 500;
    margin: 5%;
  }
`;

export const HomeMobileVideoSection = styled.div`
  width: 100%;
  padding: 5%;
`;

export const HomeMobileVideoText = styled.p`
  margin-bottom: 25px;
  &:first-child {
    font-size: 4vh;
    font-weight: 400;
    color: ${colors.footerColor};
    margin-bottom: 10px;
  }
  &:nth-child(2) {
    font-weight: 600;
    font-size: 3vh;
    text-transform: uppercase;
    margin-bottom: 15px;
    color: ${colors.mainColor};
  }
  &:last-child {
    font-size: 14px;
  }
`;
