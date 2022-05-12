import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Title component that'll render an <h1> tag with some styles
export const Container = styled.nav`
  width: 100%;
  height: 44px;
  background-color: hsl(0, 0%, 100%);
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: hsl(0, 0%, 86%);
  }
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Button = styled.a`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 20px;
`;
