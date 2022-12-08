import styled from 'styled-components';
import { Centering, colors } from './UniversalStyle';

export const TemplateContainer = styled.div`
  width: 100%;
`;

export const TemplateContent = styled.div`
  width: 100%;
  height: 85vh;
  position: relative;
  & > img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .subContent {
    position: relative;
    width: 100%;
    padding: 7%;
    height: 85%;
    opacity: 0;
    z-index: 5;
    font-size: 5vh;
    font-weight: 700;
    color: ${colors.baseColor};
  }
  .subContent > p:first-child {
    font-size: 4vh;
    font-weight: 500;
  }
  @media screen and (max-width: 990px) {
    & > img {
      object-fit: fill;
    }
  }
`;

export const TemplateBtn = styled.div`
  width: 15%;
  margin-left: 7%;
  text-transform: uppercase;
  padding: 10px;
  position: relative;
  z-index: 5;
  color: ${colors.baseColor};
  background: ${colors.secondaryColor};
  @media screen and (max-width: 990px) {
    width: 60%;
    text-align: center;
  }
`;

export const TemplateCustomerContent = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  @media screen and (max-width: 990px) {
    height: auto;
    margin-bottom: 15%;
    flex-direction: column;
  }
`;

export const TemplateCustomerTab = styled.div`
  height: 100%;

  &:first-child {
    width: 60%;
    padding-left: 7%;
    padding-top: 2%;
  }
  &:last-child {
    width: 40%;
    padding: 7%;
  }
  & > p:first-child {
    margin-bottom: 7%;
  }
  & > p:first-child > a {
    font-weight: 500;
    color: ${colors.secondaryColor};
  }
  & > p:nth-child(2) {
    margin-bottom: 5%;
  }
  & > p:nth-child(3) {
    margin-bottom: 3%;
  }
  & > p:last-child > span {
    color: ${colors.secondaryColor};
  }
  @media screen and (max-width: 990px) {
    &:first-child {
      width: 100%;
    }
    &:last-child {
      margin-top: 15%;
      width: 100%;
      ${Centering}
    }
  }
`;

export const TemplateServiceContent = styled.div`
  width: 100%;
  height: 60vh;
  ${Centering}
  background: ${colors.secondaryColor};
  @media screen and (max-width: 990px) {
    height: 70vh;
    padding: 5%;
    flex-direction: column;
  }
`;

export const TemplateServiceTab = styled.div`
  width: 50%;
  height: 90%;
  color: ${colors.baseColor};
  ${Centering}
  flex-direction: column;
  & > p {
    font-size: 5vh;
    text-transform: uppercase;
  }
  & > div {
    width: 80%;
    padding: 5%;
    ${Centering}
    gap: 10%;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    & > p {
      font-size: 4vh;
      font-weight: 600;
      margin-top: 10%;
      margin-bottom: 5%;
      text-align: left;
      margin-left: 0;
    }
    & > div {
      width: 100%;
      height: 100%;
      padding: 15%;
      gap: 30px;
      flex-direction: column;
    }
    & > div > ul {
      width: 100%;
      margin: 0;
    }
  }
`;

export const TemplateSetContent = styled.div`
  width: 100%;
  height: 140vh;
  ${Centering}
  padding-top: 2%;
  flex-direction: column;
  & > p {
    font-size: 5vh;
    text-transform: uppercase;
    color: ${colors.secondaryColor};
    margin-bottom: 3%;
    font-weight: 700;
  }
  @media screen and (max-width: 990px) {
    height: fit-content;
  }
`;

export const TemplateSetTabContainer = styled.div`
  width: 100%;
  ${Centering}
  height: 80%;
  gap: 3%;
  @media screen and (max-width: 990px) {
    height: fit-content;
    padding: 10px;
    flex-direction: column;
  }
`;

export const TemplateSetTab = styled.div`
  width: 25%;
  height: 80%;
  background: linear-gradient(180deg, #eee, #fff 75%);
  @media screen and (max-width: 990px) {
    background: linear-gradient(180deg, #eee, #fff 85%);
    width: 100%;
    margin-bottom: 2%;
  }
`;

export const TemplateSetTabHeader = styled.div`
  width: 100%;
  height: 6%;
  ${Centering}
  background: ${colors.mainColor};
  color: ${colors.baseColor};
  font-weight: 600;
  @media screen and (max-width: 990px) {
    height: 10%;
    padding: 10px;
  }
`;

export const TemplateSetTabContent = styled.div`
  width: 100%;
  display: flex;
  height: fit-content;
`;

export const TemplateSetTabSubContent = styled.div`
  & > p:first-child {
    font-weight: 600;
    margin-bottom: 10px;
  }
  &:first-child {
    height: 100%;
    width: 35%;
    padding: 10%;
  }
  &:last-child {
    height: 100%;
    padding: 5%;
    width: 65%;
  }
  & > img {
    width: 60px;
    height: 60px;
  }
  @media screen and (max-width: 990px) {
    & > p:first-child {
      font-size: 16px;
    }
    &:first-child {
      height: 100%;
      width: 30%;
      padding: 10%;
    }
    &:last-child {
      height: 100%;
      padding: 5%;
      width: 70%;
    }
    & > img {
      width: 50px;
      height: 50px;
    }
  }
`;

export const TemplateSpeakContent = styled.div`
  width: 100%;
  height: 40vh;
  background: ${colors.secondaryColor};
  color: ${colors.baseColor};
  ${Centering}
  gap: 15%;
  flex-direction: column;
  & > p:first-child {
    font-weight: 600;
    font-size: 5vh;
  }
  & > p > a {
    color: ${colors.baseColor};
    font-weight: 500;
  }
  @media screen and (max-width: 990px) {
    padding: 10px;
    text-align: center;
    font-size: 14px;
    & > p:first-child {
      font-weight: 600;
      font-size: 3vh;
    }
  }
`;
