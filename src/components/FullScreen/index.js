import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { stopPresentationMode } from 'utils/fullscreen'
import { Flex } from '@rebass/grid'
import { CustomIcon } from 'components/Icon'
import { Button } from 'components/Button'
import Container from './components/Container'

export const FullScreen = ({ children, show, scaffold, onExit }) => {
  useEffect(() => {
    const onFullScreen = e => {
      if (document.fullscreenElement) {
        // start
      } else {
        onExit()
      }
    }

    document.addEventListener('fullscreenchange', onFullScreen)
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreen)
    }
  }, [onExit])

  if (!show) return null

  return (
    <Container
      flexDirection='column'
      justifyContent='space-between'
      show={show}
    >
      {scaffold &&
        <>
          <Container
            p={2}
            alignItems='center'
            height='5vh'
            controls
            justifyContent='flex-end'
          >
            <Button onClick={() => {
              stopPresentationMode()
              onExit()
            }}
            >
              <Flex alignItems='center'>
                <CustomIcon src='./images/close.png' size='25px' />
              </Flex>
            </Button>
          </Container>
          <Container height='95vh' background='#ffffff'>
            {children}
          </Container>
        </>}
      {!scaffold && children}
    </Container>
  )
}

FullScreen.propTypes = {
  children: PropTypes.any.isRequired,
  scaffold: PropTypes.bool,
  show: PropTypes.bool,
  onExit: PropTypes.func
}

FullScreen.defaultProps = {
  scaffold: true,
  show: false
}
