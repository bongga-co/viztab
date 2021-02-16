import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { stopPresentationMode } from 'utils/fullscreen'
import { setFullScreenMode } from 'state/modules/ui/fullscreen'
import { Flex } from '@rebass/grid'
import { CustomIcon } from 'components/Icon'
import { Button } from 'components/Button'
import Container from './components/Container'

export const FullScreen = ({ children, show, scaffold, onExit }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const onFullScreen = e => {
      if (document.fullscreenElement) {
        dispatch(setFullScreenMode())
      } else {
        dispatch(setFullScreenMode())
        onExit()
      }
    }

    document.addEventListener('fullscreenchange', onFullScreen)
    return () => {
      document.removeEventListener('fullscreenchange', onFullScreen)
    }
  }, [onExit, dispatch])

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
                <CustomIcon src='./images/icons/close.png' size='25px' />
              </Flex>
            </Button>
          </Container>
          <Container height='95vh' background='rgba(30,30,30,1.0)'>
            {children}
          </Container>
        </>}
      {!scaffold && children}
    </Container>
  )
}

FullScreen.propTypes = {
  scaffold: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  onExit: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

FullScreen.defaultProps = {
  scaffold: true,
  show: false
}
