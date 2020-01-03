import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export const Stats = styled(Flex).attrs({
  flexDirection: 'column',
  alignItems: 'center'
})`
  position: absolute; 
  bottom: 0; 
  left: 0; 
  right: 0;
`
