import styled from 'styled-components';
import { Centering } from './UniversalStyle';

export const NotFoundContainer = styled.div`
  width: 100%;
  height: 70%;
  ${Centering}
  flex-direction: column;
  gap: 3%;
  & > svg {
    width: 50%;
    height: 50%;
  }
`;
