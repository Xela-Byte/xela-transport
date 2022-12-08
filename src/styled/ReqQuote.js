import styled from 'styled-components';
import { colors, Centering } from './UniversalStyle';

export const ReqQuoteContainer = styled.div`
  width: 100%;
  ${Centering}
  @media screen and (max-width: 990px) {
    padding: 0;
  }
`;

export const ReqForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  color: ${colors.footerColor};
  flex-direction: column;
  .dropdown {
    margin-bottom: 2%;
    width: 60%;
  }
  .dropdown-content::-webkit-scrollbar {
    width: 8px;
  }
  .dropdown-content::-webkit-scrollbar-thumb {
    width: 8px;
    border-radius: 8px;
    background: ${colors.footerColor};
  }
  @media screen and (max-width: 990px) {
    width: 95%;
    .dropdown {
      width: 100%;
    }
  }
`;

export const ReqHeaderText = styled.p`
  text-align: center;
  font-size: 3vw;
  @media screen and (max-width: 990px) {
    font-size: 3.5vh;
  }
`;

export const ReqFormLabel = styled.label`
  font-size: 3vh;
  margin-bottom: 5px;
  align-self: flex-start;
  @media screen and (max-width: 990px) {
    font-size: 4vw;
  }
`;

export const ReqInput = styled.input`
  width: 60%;
  font-size: 2.5vh;
  padding: 1rem;
  border: 1px solid #eee;
  margin-bottom: 2%;
  outline: none;
  background: #fff;
  border-radius: 5px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &::-webkit-datetime-edit-fields-wrapper {
    background: #fff;
  }
  &::-webkit-datetime-edit {
   background: #fff;
  }
  &:focus {
    border: 0.15rem solid ${colors.mainColor};
  }
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const ReqTextArea = styled.textarea`
  width: 60%;
  height: 10%;
  font-size: 2.5vh;
  padding: 0.7rem;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
  &:focus {
    border: 0.15rem solid ${colors.mainColor};
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 8px;
  }
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const ReqPrivacy = styled.div`
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

export const ReqPrivacyCheckBox = styled.div`
  width: 80%;
  z-index: -4;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;

export const ReqBtn = styled.button`
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

export const ReqCapthcha = styled.div`
  width: 80%;
  padding: 10px;
  @media screen and (max-width: 990px) {
    width: 100%;
  }
`;
