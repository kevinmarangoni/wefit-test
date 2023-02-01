import React from "react";
import styled from "styled-components";

const Button = ({
    children,
    width,
    height,
    onClick,
    textColor,
    backgroundColor,
    colorOnHover,
    colorOnActive,
  }) => {
    return (
      <Element
        width={width}
        height={height}
        onClick={onClick}
        color={textColor}
        backgroundColor={backgroundColor}
        colorOnHover={colorOnHover}
        colorOnActive={colorOnActive}
      >
        {children}
      </Element>
    );
  };
  
  export default Button;
  
  const Element = styled.button`
    background-color: ${(props) =>
      props.backgroundColor ?? props.theme.color.highlight.main};
    width: ${(props) => props.width ?? "207px"};
    height: ${(props) => props.height ?? "40px"};
    border-radius: 4px;
    outline: none;
    border: none;
    transition: all ease-in-out 0.2s;
    color: ${(props) => props.theme.color.font.primary};
    font-size: ${(props) => props.theme.color.font.size.m};
    font-weight: 700;
    :hover {
      background-color: ${(props) => props.theme.color.highlight.lighter};
    }
    :active {
      background-color: ${(props) => props.theme.color.highlight.darker};
    }
    @media screen and (max-width: 768px) {
    width: 100%;
    }
  `;