import styled from "styled-components";
import { colors } from "./UniversalStyle";

export const LgsServiceContainer = styled.div`
  padding: 2%;
  width: fit-content;
  height: fit-content;
  background: ${colors.mainColor};
  font-size: 16px;
  color: ${colors.baseColor};
  position: fixed;
  z-index: 999;
  left: 50%;
  & > p {
    margin-bottom: 10px;
    cursor: pointer;
  }
  & > p > a {
    margin: 0px;
    color: ${colors.baseColor};
    font-weight: 500;
    text-decoration: none;
  }
  & > p > a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: ${colors.accentColor};
  }
  & > div > p > a {
    margin: 0px;
    color: ${colors.baseColor};
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
