import React from 'react'
import { useDispatch } from 'react-redux'
import { Flex } from '@rebass/grid'
import { Button } from 'components/Button'
import { CustomIcon } from 'components/Icon'
import { Container } from './components/Container'
import { setSidebarOpen } from 'state/modules/ui/sidebar'
import { PresentationButton } from 'components/PresentationButton'
import { startPresentationMode } from 'utils/fullscreen'

export const Header = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Flex alignItems='center'>
        <Button onClick={() => dispatch(setSidebarOpen())}>
          <CustomIcon src='./images/icons/menu.svg' />
        </Button>
      </Flex>
      <PresentationButton onClick={() => startPresentationMode(null)} />
    </Container>
  )
}
