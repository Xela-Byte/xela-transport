import styled from 'styled-components';
import { Centering, colors } from './UniversalStyle';

export const AboutUsContainer = styled.div`
  width: 100%;
  height: 60%;
`;

export const AboutUsDisplay = styled.div`
  width: 100%;
  height: 60%;
  & > img {
    width: 100%;
    height: 60%;
    position: absolute;
    object-fit: cover;
  }
`;

export const AboutUsDisplayContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: relative;
  color: ${colors.baseColor};
  padding: 10%;
  font-size: 7vh;
  @media screen and (max-width: 990px) {
    ${Centering}
  }
`;

export const AboutUsDesc = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  gap: 2%;
  padding: 2%;
  ${Centering}
  @media screen and (max-width: 990px) {
    flex-direction: column;
  }
`;

export const AboutUsDescContent = styled.div`
  width: 48%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  &:first-child {
    padding: 5%;
  }
  & > p {
    font-size: 5.5vh;
    font-weight: 600;
  }
  & > p:nth-child(2) {
    font-weight: 500;
    font-size: 16px;
  }
  & > p:last-child {
    font-size: 14px;
    font-weight: 500;
  }
  & > p > span {
    color: ${colors.buttonColor};
  }

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 990px) {
    gap: 20px;
    width: 100%;
    & > img {
      display: none;
    }
  }
`;

export const AboutUsService = styled.div`
  width: 100%;
  height: 50vh;
  ${Centering}
  gap: 2%;
  @media screen and (max-width: 990px) {
    height: 80vh;
    flex-direction: column;
  }
`;

export const AboutUsServiceTab = styled.div`
  width: 30%;
  height: 70%;
  padding: 2%;
  border-radius: 5px;
  box-shadow: -10px 10px 31px #c4c4c4, 10px -10px 31px #ffffff;
  transition: 0.4s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px #c4c4c4, 0px 0px 0px #ffffff;
    background: #eee;
    padding-bottom: 15%;
    & > p:last-child {
      margin-top: 10px;
    }
  }
  & > img {
    width: 30%;
    height: 30%;
  }
  & > p {
    text-transform: capitalize;
    font-size: 23px;
  }
  & > p:last-child {
    margin-top: 40%;
    font-size: 14px;
    color: ${colors.footerColor};
  }
  @media screen and (max-width: 990px) {
    width: 90%;
    height: 100%;
    padding: 5%;
    & > p {
      text-transform: capitalize;
      font-size: 18px;
    }
    & > p:last-child {
      margin-top: 40%;
      font-size: 14px;
      color: ${colors.footerColor};
    }
  }
`;

export const AboutUsManagement = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2%;
  & > p {
    text-align: center;
    font-size: 7vh;
  }
  & > p > span {
    color: ${colors.buttonColor};
  }
  & > p:nth-child(2) {
    color: ${colors.footerColor};
    font-size: 16px;
  }
  .SwiperComponent {
    width: 100%;
    height: 75%;
    padding-top: 2%;
  }
  .SwiperComponent .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
  }
  .SwiperComponent .swiper-pagination-bullet-active {
    background: ${colors.mainColor};
  }
  .SwiperBtns {
    width: 100%;
    ${Centering}
    gap: 30%;
  }
  .SwiperPrevBtn .SwiperNextBtn {
    width: 40%;
    & > img {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 990px) {
    height: 150vh;
    margin-top: 10%;
    & > p {
      margin-bottom: 10px;
      font-size: 5vh;
    }
    .SwiperComponent {
      height: 50%;
    }
  }
`;

export const AboutUsTeam = styled.div`
  width: 70%;
  height: 90%;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  margin: auto;
  & > img {
    width: 100%;
    height: 80%;
    border-radius: 5px;
    object-fit: cover;
  }
  & > p:last-child {
    text-transform: uppercase;
    color: ${colors.secondaryColor};
  }
  @media screen and (max-width: 990px) {
    width: 70%;
    height: 100%;
  }
`;

export const AboutUsMoreContainer = styled.div`
  width: 100%;
  height: 80%;
  ${Centering}
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const AboutUsMoreDisplay = styled.div`
  width: 100%;
  height: 70%;
  & > img {
    width: 100%;
    height: 60%;
    position: absolute;
    object-fit: cover;
  }
`;

export const AboutUsMoreDisplayContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 9;
  position: relative;
  color: ${colors.baseColor};
  padding: 10%;
  font-size: 7vh;
  gap: 25%;
  font-weight: 600;
  flex-direction: column;
  text-align: center;
  ${Centering}
  & > p:first-child {
    font-weight: 500;
    font-size: 4vh;
  }
`;

export const ConnectBtn = styled.div`
  width: 20%;
  border-radius: 5px;
  padding: 10px;
  background: ${colors.buttonColor};
  color: black;
  font-size: 16px;
  & > a {
    text-decoration: none;
  }
`;
