import { createGlobalStyle } from "styled-components";
import breakpoints from "../utils/breakpoints";

// Declare Global Styles
export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background: rgb(211,211,211);
  }
  main {
      width: 100%;
      ${breakpoints.sm} {
        width: 640px;
      }
      ${breakpoints.md} {
        width: 500px;
      }
      margin: 0 auto;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }`;
