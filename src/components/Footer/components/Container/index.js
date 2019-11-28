import styled from 'styled-components'
import { Flex } from '@rebass/grid'

const Container = styled(Flex).attrs({
  as: 'footer',
  px: 3,
  justifyContent: 'center',
  alignItems: 'center'
})`
  height: ${props => props.theme.footerHeight};
  background-color: ${props => props.theme.footer.background};
`

export default Container
