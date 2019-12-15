import styled from 'styled-components'

export const Content = styled.main`
  background-color: ${props => props.theme.content.background};
  min-height: ${props => props.theme.contentHeight};
`
