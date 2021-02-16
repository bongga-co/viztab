import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Inner = styled.div`
  width: 320px;
  height: 480px;
  border-left: 10px solid #333;
  border-right: 10px solid #333;
`

export default () => (
  <Container>
    <Inner>
      Inner content
    </Inner>
  </Container>
)
