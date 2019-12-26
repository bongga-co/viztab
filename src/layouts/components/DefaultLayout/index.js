import React from 'react'
import styled, { withTheme } from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'

const Main = styled(Box).attrs(props => ({
  width: '100vw',
  ml: [0, 0, props.theme.sidebar.width]
}))`
  overflow-x: hidden;
  position: relative;
`

export default withTheme(({ children, theme }) => (
  <>
    <Flex>
      <Sidebar />
      <Main>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Main>
    </Flex>
  </>
))
