import React from 'react'
import { Flex, Box } from '@rebass/grid'
import { Link } from 'react-router-dom'
import { Text } from 'components/Text'
import { Logo } from 'components/Logo'
import { Menu } from 'components/Menu'
import { Container, BorderBottom } from './components'
import { APP_NAME } from 'globals/constants'

export const Sidebar = () => {
  return (
    <Container>
      <nav>
        <BorderBottom>
          <Link to='/'>
            <Flex alignItems='center' justifyContent='center' p={2}>
              <Logo size={25} />
              <Box ml={2}>
                <Text fontsize='1rem'>{APP_NAME}</Text>
              </Box>
            </Flex>
          </Link>
        </BorderBottom>
        <Menu />
      </nav>
    </Container>
  )
}
