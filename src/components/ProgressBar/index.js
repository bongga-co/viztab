import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 8px;
  background-color: rgb(70, 70, 70);
  border-radius: 5px;

  & > div {
    background-color: ${props => props.theme.content.primary};
    height: 100%;
    width: ${props => props.progress}%;
    margin: 0;
    border-radius: 5px;
  }
`

export const ProgressBar = ({ progress }) => {
  return (
    <Container progress={progress}>
      <div />
    </Container>
  )
}
