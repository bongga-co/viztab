import React from 'react'
import styled from 'styled-components'
import { Close as CloseIcon } from 'components/Icon'

const Container = styled.div`
  outline: none;
  border: none;
  cursor: pointer;

  & > svg {
    fill: ${props => props.theme.sheet.close};
  }
`

export const Close = (props) => (
  <Container {...props}>
    <CloseIcon size='16px' />
  </Container>
)
