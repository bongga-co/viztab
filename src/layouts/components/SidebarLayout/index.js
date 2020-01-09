import React from 'react'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'

const Main = styled(Box).attrs(props => ({
  width: ['100vw', '100vw', `calc(100vw - ${props.theme.sidebar.width})`],
  ml: [0, 0, props.theme.sidebar.width]
}))`
  position: relative;
`

export default ({ children }) => (
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
)
