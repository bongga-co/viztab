import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import { Container } from './components/Container'
import { Close } from './components/Close'

export const Sheet = ({ data, source, position, onClose }) => {
  useEffect(() => {
    document.body.style.height = '100vh'
    document.body.style.overflow = 'hidden'
  }, [])

  const handleClose = (e) => {
    e.stopPropagation()

    document.body.style.height = null
    document.body.style.overflow = null

    onClose && onClose()
  }

  return (
    <Container source={source} position={position}>
      <Flex justifyContent='flex-end' p={2}>
        <Close onClick={handleClose} />
      </Flex>
      <Flex flex='1'>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundImage: `url(${data.imageUrl})`
        }}
        />
      </Flex>
    </Container>
  )
}

Sheet.propTypes = {
  data: PropTypes.object.isRequired,
  source: PropTypes.oneOf(['grid', 'slider']),
  position: PropTypes.number,
  onClose: PropTypes.func
}

Sheet.defaultProps = {
  source: 'slider'
}
