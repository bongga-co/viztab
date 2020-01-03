import styled from 'styled-components'
import { Flex } from '@rebass/grid'

export default styled(Flex).attrs({
  as: 'footer',
  px: 3,
  justifyContent: 'center',
  alignItems: 'center'
})`
  height: ${props => props.theme.footerHeight};
  background-color: ${props => props.theme.footer.background};
  border-top: 1px solid ${props => props.theme.footer.border};
`
