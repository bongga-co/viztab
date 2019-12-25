import React from 'react'
import { Container } from './components'
import { PresentationButton } from 'components/PresentationButton'
import { startPresentationMode } from 'utils/fullscreen'

export const Header = () => {
  return (
    <Container justifyContent='flex-end'>
      <PresentationButton onClick={() => startPresentationMode(null)} />
    </Container>
  )
}
