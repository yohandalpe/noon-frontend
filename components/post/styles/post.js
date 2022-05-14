import styled from "styled-components";
import breakpoints from "../../../utils/breakpoints";

// Create a Container component that'll render an <article> tag with some styles
export const Container = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-top: 1px solid rgb(219, 219, 219);
  &:first-of-type {
    margin-top: 0;
  }
  &:last-of-type {
    margin-bottom: 50px;
  }
  ${breakpoints.lg} {
    &:first-of-type {
      margin-top: 50px;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

// Create a Header component that'll render a <div> tag with some styles
export const Header = styled.div`
  background-color: rgb(255, 255, 255);
  border-bottom: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

// Create a Profile component that'll render a <div> tag with some styles
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

// Create a Avatar component that'll render a <div> tag with some styles
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
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }
`;

// Create a User component that'll render a <span> tag with some styles
export const User = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: rgb(38, 38, 38);
  text-decoration: none;
  text-transform: lowercase;
`;

// Create a Content component that'll render a <div> tag with some styles
export const Content = styled.div`
  display: flex;
  position: relative;
`;

// Create a Media component that'll render a <div> tag with some styles
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

// Create a Meta component that'll render a <div> tag with some styles
export const Meta = styled.div`
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

// Create a MetaContainer component that'll render a <div> tag with some styles
export const MetaContainer = styled.div`
  display: flex;
  padding: 16px;
  span {
    font-weight: bold;
  }
`;

// Create a FavouriteButton component that'll render a <button> tag with some styles
export const FavouriteButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  margin-left: auto;
  color: rgb(255, 255, 255);
`;

// Create a Info component that'll render a <div> tag with some styles
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 16px;
  gap: 10px;
  background-color: rgb(255, 255, 255);
`;

// Create a Likes component that'll render a <div> tag with some styles
export const Likes = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  span {
    font-size: 14px;
    font-weight: 400;
    color: rgb(38, 38, 38);
  }
  a {
    font-size: 14px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    text-decoration: none;
  }
`;

// Create a Caption component that'll render a <div> tag with some styles
export const Caption = styled.div`
  display: block;
  font-size: 14px;
  font-weight: 400;
  color: rgb(38, 38, 38);
  a {
    font-size: 14px;
    font-weight: 500;
    color: rgb(38, 38, 38);
    text-decoration: none;
  }
`;

// Create a Hashtags component that'll render a <div> tag with some styles
export const Hashtags = styled.div`
  margin: 0.5rem 0;
  a {
    color: blue;
  }
`;

// Create a Comments component that'll render a <div> tag with some styles
export const Comments = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: rgb(153, 153, 153);
`;

// Create a Message component that'll render a <div> tag with some styles
export const Message = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: rgb(255, 0, 0);
  text-align: center;
  margin: 1rem 0;
`;
