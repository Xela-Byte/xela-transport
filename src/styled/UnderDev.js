import styled from 'styled-components';
import { Centering } from './UniversalStyle';

export const UnderDevContainer = styled.div`
  width: 100%;
  height: 70%;
  ${Centering}
  flex-direction: column;
  gap: 3%;
  @media screen and (max-width: 990px) {
    padding: 3%;
  }
`;

export const UnderDevImg = styled.img`
  width: 50%;
  height: 50%;
`;

export const UnderDevContent = styled.div`
  width: 100%;
  text-align: center;
`;
