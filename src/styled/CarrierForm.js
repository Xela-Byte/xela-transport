import styled from 'styled-components';
import { Centering, colors } from './UniversalStyle';

export const CarrierFormContainer = styled.div`
  width: 100%;
  padding: 2%;
  ${Centering}
  @media screen and (max-width: 990px) {
    padding: 0;
  }
`;

export const CarrierFormStyled = styled.form`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  color: ${colors.footerColor};
  flex-direction: column;
  @media screen and (max-width: 990px) {
  }
`;

export const CarrierHeaderText = styled.p`
  text-align: center;
  font-size: 3vw;
  @media screen and (max-width: 990px) {
    font-size: 30px;
  }
`;

export const CarrierFormLabel = styled.label`
  font-size: 3vh;
  margin-bottom: 5px;
  align-self: flex-start;
  @media screen and (max-width: 990px) {
    font-size: 4vw;
  }
`;

export const CarrierReqInput = styled.input`
  width: 60%;
  font-size: 2.5vh;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 2%;
  outline: none;
  border-radius: 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &:focus {
    border: 0.15rem solid ${colors.mainColor};
  }
  @media screen and (max-width: 990px) {
    margin-bottom: 4%;
    width: 100%;
  }
`;

export const CarrierReqContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const CarrierReqDocument = styled.input`
  width: 60%;
  font-size: 2.5vh;
  padding: 1rem;
  border: 1px solid #eee;
  margin-top: 2%;
  margin-bottom: 2%;
  cursor: pointer;
  outline: none;
  border-radius: 5px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const CarrierReqPrivacy = styled.div`
  font-size: 16px;
  width: 75%;
  & > p {
    margin-left: 50px;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
    margin-bottom: 5%;
    font-size: 1.5vh;
  }
`;

export const CarrierReqPrivacyCheckBox = styled.div`
  width: 80%;
  z-index: -4;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const CarrierReqBtn = styled.button`
  width: 15%;
  padding: 10px;
  margin-top: 10px;
  font-size: 2.5vh;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background: ${colors.mainColor};
  color: ${colors.baseColor};
  @media screen and (max-width: 990px) {
    width: 30%;
  }
`;

export const CarrierReqCapthcha = styled.div`
  width: 80%;
  padding: 10px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;
