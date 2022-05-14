import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Wrapper component that'll render an <nav> tag with some styles
export const Wrapper = styled.nav`
  width: 100%;
  height: 50px;
  background-color: rgb(255, 255, 255);
  position: fixed;
  bottom: 0;
  top: unset;
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
  ${breakpoints.lg} {
    top: 0;
    bottom: unset;
  }
`;

// Create a Container component that'll render an <div> tag with some styles
export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 0 auto;
  ${breakpoints.sm} {
    width: 640px;
  }
  ${breakpoints.md} {
    width: 500px;
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
  span {
    font-size: 14px;
    margin-left: 0.5rem;
    display: none;
    ${breakpoints.lg} {
      display: block;
    }
  }
`;
