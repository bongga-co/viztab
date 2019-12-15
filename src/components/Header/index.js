import React from 'react'
import { useDispatch } from 'react-redux'
import { Flex } from '@rebass/grid'
import { Button } from 'components/Button'
import { CustomIcon } from 'components/Icon'
import { Container } from './components/Container'
import { setSidebarOpen } from 'state/modules/ui/sidebar'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Flex alignItems='center'>
        <Button onClick={() => dispatch(setSidebarOpen())}>
          <CustomIcon src='./images/icons/menu.svg' />
        </Button>
      </Flex>
    </Container>
  )
}
