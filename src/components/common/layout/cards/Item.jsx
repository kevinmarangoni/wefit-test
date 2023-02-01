import React from "react";
import styled from "styled-components";
import Image from "next/image";

import AddToCart from "/src/components/common/layout/buttons/AddToCart";

export const Item = ({ item }) => {
  return (
    <Container>
      <Content>
        <MovieDetailes>
          <Image
            src={item.image}
            alt={`${item.title} movie cover`}
            height={188}
            width={147}
            priority
          />
          <p>{item.title}</p>
        </MovieDetailes>
        <PriceDetails>
          <p>R$ {item.price.toFixed(2).toString().replace(".", ",")}</p>
          <AddToCart>ADICIONAR AO CARRINHO</AddToCart>
        </PriceDetails>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.color.secondary.main};
  width: ${(props) => props.width ?? "230px"};
  height: ${(props) => props.height ?? "300px"};
  border-radius: 4px;
  padding: 10px;
  p {
    color: ${(props) => props.theme.color.font.secondary};
    font-weight: 700;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MovieDetailes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7;
  p {
    text-align: center;
    font-weight: 700;
  }
`;

const PriceDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default Item;
