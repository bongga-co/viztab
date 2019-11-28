import React from 'react'
import { withTheme } from 'styled-components'
import { Text } from 'components/Text'
import Container from './components/Container'

export const Footer = withTheme(({ theme }) => (
  <Container>
    <Text textcolor={theme.footer.text}>
      {'© Bongga 2019. Todos los derechos reservados.'}
    </Text>
  </Container>
))
