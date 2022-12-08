import styled from 'styled-components';
import { Centering, colors } from './UniversalStyle';

export const ContactContainer = styled.div`
  width: 100%;
  height: 70vh;
  ${Centering}
`;

export const ContactContent = styled.div`
  width: 40%;
  margin: auto;
  height: 80%;
  border-radius: 5px;
  box-shadow: -16px 16px 34px #cccccc, 16px -16px 34px #ffffff;
  .sub-content {
    width: 100%;
    height: 20%;
    ${Centering}
    gap: 10%;
  }
  .sub-content > img {
    width: 60px;
    height: 60px;
  }
  .sub-content > p {
    font-size: 23px;
    font-weight: 600;
  }
  @media screen and (max-width: 990px) {
    width: 90%;
  }
`;

export const ContactSubContent = styled.div`
  width: 100%;
  height: 80%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 5%;
  & > p:first-child,
  & > p:nth-child(3) {
    font-weight: 600;
    font-size: 20px;
    color: ${colors.secondaryColor};
  }
  & > p > a {
    margin: 0;
    text-decoration: none;
    color: ${colors.footerColor};
  }
`;
