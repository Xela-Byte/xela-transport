import styled, { css } from "styled-components";

export const colors = {
  baseColor: "#ffffff",
  mainColor: "#3331bf",
  secondaryColor: "#1310ea",
  footerColor: "#222223",
  buttonColor: "#f3a148",
  accentColor: "#0bf3eb",
};

export const Centering = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 100%;
  margin-top: 2%;
  margin-bottom: 5%;
  height: 2.5vh;
  background: ${colors.secondaryColor};
`;
