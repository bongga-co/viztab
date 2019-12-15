import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Container = styled(Flex).attrs({
  px: 4,
  as: 'header',
  alignItems: 'center',
  justifyContent: 'space-between'
})`
  background-color: ${props => props.theme.header.background};
  position: relative;
  height: ${props => props.theme.headerHeight};
`
