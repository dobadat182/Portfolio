import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: relative;
  margin: 0;
  padding: 0.8em 1em;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  background-color: #333;
  border-radius: 10px;
  color: #fff;
  font-weight: 300;
  font-size: 18px;
  font-family: inherit;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);

  span {
    font-size: var(--normal-font-size);
    color: var(--body-color);
}
   
  &:hover {
    animation: sh0 0.5s ease-in-out both;
    span {
      animation: storm 0.7s ease-in-out both;
      animation-delay: 0.06s;
    }
    &::before,
    &::after {
      opacity: 0.15;
      transition: transform 0.2s cubic-bezier(0.02, 0.01, 0.47, 1),
        opacity 0.2s cubic-bezier(0.02, 0.01, 0.47, 1);
    }

    &::before {
      transform: translate3d(50%, 0, 0) scale(0.9);
    }
    &::after {
      transform: translate(50%, 0) scale(1.1);
    }
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    opacity: 0;
    transition: transform 0.15s cubic-bezier(0.02, 0.01, 0.47, 1),
      opacity 0.15s cubic-bezier(0.02, 0.01, 0.47, 1);
    z-index: -1;
    transform: translate(100%, -25%) translate3d(0, 0, 0);
  }

  @keyframes sh0 {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }

    25% {
      transform: rotate(7deg) translate3d(0, 0, 0);
    }

    50% {
      transform: rotate(-7deg) translate3d(0, 0, 0);
    }

    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }

    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }
`;

const DownloadCV = (props) => {
  const [state] = useState(props);

  return (
    <StyledButton>
      <span>{state.text} <i className="ri-corner-right-down-line"></i></span>
    </StyledButton>
  );
};

export default DownloadCV;
