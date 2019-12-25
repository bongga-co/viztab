import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export default styled(Flex).attrs(props => ({
  px: 4,
  as: 'header',
  alignItems: 'center',
  justifyContent: props.justifyContent || 'space-between'
}))`
  position: relative;
  height: ${props => props.theme.headerHeight};
  background-color: ${props => props.theme.header.background};
  /* box-shadow: 0 0.125rem 9.375rem rgba(90,97,105,.1), 
              0 0.25rem 0.5rem rgba(90,97,105,.12), 
              0 0.9375rem 1.375rem rgba(90,97,105,.1), 
              0 0.4375rem 2.1875rem rgba(165,182,201,.1); */
`
