import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'

export default ({ children }) => (
  <>
    <Flex>
      <Sidebar />
      <Box width={['100vw', '100vw', '80vw']} ml={[0, 0, '20vw']}>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Box>
    </Flex>
  </>
)
