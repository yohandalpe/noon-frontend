import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Title component that'll render an <h1> tag with some styles
export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 50px;
  border-top: 1px solid hsl(0, 0%, 86%);
`;

// Create a Wrapper component that'll render a <section> tag with some styles
export const Header = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-bottom: 1px solid hsl(0, 0%, 86%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border: 1px solid hsla(0, 0%, 100%, 0.1);
    border-radius: 50%;
  }
`;

export const User = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: hsl(0, 0%, 15%);
  text-decoration: none;
  text-transform: lowercase;
  &:hover {
    text-decoration: underline;
  }
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;

export const Media = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  position: relative;
  &:-webkit-scrollbar {
    display: none;
  }
`;

export const Meta = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  color: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const MetaContainer = styled.div`
  display: flex;
  padding: 16px;
  span {
    font-weight: bold;
  }
`;

export const FavouriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: auto;
  color: rgba(255, 255, 255);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 16px;
  gap: 10px;
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    font-size: 14px;
    font-weight: 400;
    color: hsl(0, 0%, 15%);
  }
  a {
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 15%);
    text-decoration: none;
  }
`;

export const Caption = styled.div`
  display: flex;
  span {
    font-size: 14px;
    font-weight: 400;
    color: hsl(0, 0%, 15%);
  }
  a {
    font-size: 14px;
    font-weight: 500;
    color: hsl(0, 0%, 15%);
    text-decoration: none;
  }
`;

export const Comments = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: hsl(0, 0%, 60%);
`;
