import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export default styled(Flex).attrs({
  alignItems: 'center',
  justifyContent: 'center'
})`
  border-bottom: 1px solid #e1e5eb;
  height: ${props => props.theme.headerHeight};

  & a {
    width: 100%;
  }
`
