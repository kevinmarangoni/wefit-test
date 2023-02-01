import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <h1>WeMovies</h1>
        </Logo>
        <Cart>Meu Carrinho</Cart>
      </Content>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 72px;
  padding: 12px;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`

const Logo = styled.div`
  h1{
    font-size: ${props=> props.theme.color.font.size.xl};
  }
`

const Cart = styled.div``