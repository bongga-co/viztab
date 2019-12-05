import styled from 'styled-components'
import { Box } from '@rebass/grid'

export const Content = styled(Box).attrs({
  p: 3,
  as: 'main'
})`
  background-color: ${props => props.theme.content.background};
  min-height: ${props => props.theme.contentHeight};
`
