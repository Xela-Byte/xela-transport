import styled from "styled-components";
import { Centering, colors } from "./UniversalStyle";

export const FtlContainer = styled.div`
  width: 100%;
  height: fit-content;
`;

export const FtlDisplay = styled.div`
  z-index: 2;
  width: 100%;
  height: 75vh;
  & > img {
    width: 100%;
    height: 85%;
    position: absolute;
  }
  @media screen and (max-width: 990px) {
    & > img {
      width: 100%;
      height: 75%;
      position: absolute;
      object-fit: cover;
    }
  }
`;

export const FtlDisplayContent = styled.div`
  width: 50%;
  height: 100%;
  z-index: 9;
  margin-left: auto;
  position: relative;
  color: ${colors.baseColor};
  display: flex;
  padding: 2%;
  padding-top: 7%;
  gap: 20px;
  flex-direction: column;
  & > p:first-child {
    font-size: 10vh;
  }
  & > p:nth-child(2) {
    align-self: flex-start;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    padding: 5%;
    & > p:first-child {
      font-size: 7vh;
      text-align: center;
    }
    & > p:nth-child(2) {
      align-self: flex-end;
    }
  }
`;

export const FtlInfoTabContainer = styled.div`
  width: 60%;
  height: 30vh;
  display: flex;
  gap: 2%;
  left: 5%;
  margin-top: -2%;
  z-index: 4;
  position: absolute;
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const FtlInfoTab = styled.div`
  width: 49%;
  height: 100%;
  padding: 3.5%;
  display: flex;
  gap: 20px;
  &:first-child {
    background: ${colors.buttonColor};
  }
  &:last-child {
    background: ${colors.mainColor};
  }
  & > img {
    width: 20%;
    height: 70%;
  }
  .ftlInfoContent {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: ${colors.baseColor};
    & > p:first-child {
      font-weight: 600;
      font-size: 18px;
    }
    & > p:last-child {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
export const FtlDescContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  gap: 4%;
  margin-top: 40vh;
  @media screen and (max-width: 990px) {
    margin-top: 0;
    flex-direction: column;
    height: auto;
    padding: 10px;
  }
`;

export const FtlDescContent = styled.div`
  width: 48%;
  padding: 2%;
  position: relative;
  height: 100%;
  &:first-child {
    padding-left: 10%;
  }
  & > img {
    width: 70%;
    height: 90%;
  }
  & > p:nth-child(1) {
    font-size: 5vh;
    font-weight: 700;
    color: #5f5e5e;
  }
  & > p:nth-child(1) > span {
    color: ${colors.mainColor};
  }
  & > p:nth-child(2) {
    margin-top: 3%;
    margin-bottom: 5%;
    font-weight: 600;
    font-size: 3vh;
  }
  .FtlFactors {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    & > img {
      width: 30px;
      height: 30px;
    }
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    & > img {
      display: none;
    }
  }
`;

export const FtlDesTab = styled.div`
  width: 45%;
  height: 25%;
  padding: 5%;
  z-index: 5;
  position: absolute;
  color: ${colors.baseColor};
  left: 45%;
  margin-top: -15%;
  border-radius: 0px 30px 0px 30px;
  font-size: 3.5vh;
  font-weight: 700;
  background: ${colors.mainColor};
  @media screen and (max-width: 990px) {
    display: none;
  }
`;

export const FtlWorksContainer = styled.div`
  width: 100%;
  color: ${colors.baseColor};
  height: 70vh;
  position: relative;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 990px) {
    color: ${colors.footerColor};
    height: auto;

    & > img {
      display: none;
    }
  }
`;

export const FtlWorksContent = styled.div`
  width: 100%;
  padding: 3%;
  height: 100%;
  position: relative;
  z-index: 9;
  & > p:first-child {
    font-size: 7vh;
    font-weight: 700;
  }
  @media screen and (max-width: 990px) {
    & > p:first-child {
      text-align: center;
    }
  }
`;

export const FtlWorksStepsContainer = styled.div`
  width: 100%;
  height: 85%;
  gap: 3%;
  display: flex;
  & > img {
    width: 85%;
    height: 50%;
  }
  .FtlWorksStepsTab {
    display: flex;
    gap: 12%;
  }
  @media screen and (max-width: 990px) {
    flex-direction: column;
    color: ${colors.footerColor};
    gap: 5px;
    height: 100%;
    .FtlWorksStepsTab {
      flex-direction: column;
      gap: 10px;
    }
  }
`;

export const FtlWorksStepsTab = styled.div`
  height: 100%;
  ${Centering}
  flex-direction: column;
  text-align: center;
  & > p:first-child {
    font-size: 10vh;
    font-weight: 700;
    color: ${colors.mainColor};
  }
  & > p:nth-child(2) {
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 10px;
  }
  & > p:last-child {
    font-weight: 500;
    color: ${colors.baseColor};
    font-size: 16px;
  }
  @media screen and (max-width: 990px) {
    & > p:last-child {
      color: ${colors.footerColor};
    }
  }
`;

export const FtlMoreInfoContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  position: relative;
  @media screen and (max-width: 990px) {
    flex-direction: column;
    height: auto;
  }
`;

export const FtlMoreInfoTab = styled.div`
  width: 50%;
  height: 100%;
  .FtlFactors {
    display: flex;
    gap: 10px;
    margin-bottom: 5%;
    & > img {
      width: 30px;
      height: 30px;
    }
    & > p {
      text-transform: capitalize;
    }
  }
  & > p {
    text-transform: capitalize;
  }
  & > p:first-child {
    font-size: 5vh;
    color: ${colors.mainColor};
    margin-bottom: 7%;
  }
  & > p:first-child > span {
    color: ${colors.buttonColor};
  }
  &:nth-child(1) {
    padding: 5%;
  }
  & > img {
    width: 80%;
    height: 100%;
    margin-left: 10%;
  }
  &:nth-child(5) {
    padding: 5%;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    & > img:first-child {
      display: none;
    }
  }
`;

export const FtlMoreInfoContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  ${Centering}
  padding: 2%;
  gap: 20px;
  text-align: center;
  flex-direction: column;
  & > img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
  & > p {
    z-index: 9;
    font-size: 7vh;
    font-weight: 700;
    color: ${colors.mainColor};
  }
  & > div {
    z-index: 9;
  }
  @media screen and (max-width: 990px) {
    & > p {
      font-size: 5.5vh;
      color: ${colors.baseColor};
    }
  }
`;
