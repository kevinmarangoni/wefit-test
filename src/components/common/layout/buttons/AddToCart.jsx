import React from "react";
import styled from "styled-components";
import Image from "next/image"
import addToCartIcon from "/src/assets/images/addToCartIcon.svg"

export const AddToCart = ({
    children,
    width,
    height,
    onClick,
    textColor,
    backgroundColor,
    colorOnHover,
    colorOnActive,
    quantitytInCart,
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
        quantitytInCart={quantitytInCart}
      >
        <span>
            <p><Image src={addToCartIcon} alt={`add To Cart Icon`}></Image></p>
            <p><span>{quantitytInCart ?? 0}</span></p>
        </span>
        <span>{children}</span>
      </Element>
    );
  };

  export default AddToCart;

  const Element = styled.button`
  background-color: ${(props) => props.backgroundColor ?? props.theme.color.highlight.main};
  width: ${(props) => props.width ?? "207px"};
  height: ${(props) => props.height ?? "40px"};
  border-radius: 4px;
  outline: none;
  border: none;
  transition: all ease-in-out 0.2s;
  color: ${(props) => props.theme.color.font.primary};
  font-weight: 700;

  display:flex;
  justify-content: center;
  align-items: center;
  gap:12px;

  span{
    font-size: ${(props) => props.theme.color.font.size.s};
    display:flex;
    gap: 5px;
    justify-content: center;
    align-items: center;
    span{
        font-weight: 400;
    }
  }

  :hover {
    background-color: ${(props) => props.theme.color.highlight.lighter};
  }
  :active {
    background-color: ${(props) => props.theme.color.highlight.darker};
  }

`;