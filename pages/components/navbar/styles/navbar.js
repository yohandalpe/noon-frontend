import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Container component that'll render an <nav> tag with some styles
export const Container = styled.nav`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
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
    background-color: rgb(219, 219, 219);
  }
`;

// Create a Button component that'll render an <a> tag with some styles
export const Button = styled.a`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 20px;
`;
