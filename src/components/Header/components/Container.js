import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export default styled(Flex).attrs(props => ({
  px: 3,
  as: 'header',
  alignItems: 'center',
  justifyContent: props.justifyContent || 'space-between'
}))`
  position: sticky;
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.header.background};
  box-shadow: 0 0.125rem 0.625rem rgba(90,97,105,.12);
  top: 0;
  z-index: 1020;
`
