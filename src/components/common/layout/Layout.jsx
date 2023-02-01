import React from 'react'
import styled from 'styled-components'

const Layout = ({children}) => {
  return (
    <Container>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Layout

const Container = styled.div`
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  width: 735px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`