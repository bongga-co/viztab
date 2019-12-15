import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import { CustomIcon } from 'components/Icon'
import { Button } from 'components/Button'

export const PresentationButton = ({ onClick }) => {
  return (
    <Button
      radius='50px'
      background='rgba(201,35,20,1.0)'
      padding='10px'
      onClick={onClick}
    >
      <Flex alignItems='center'>
        <CustomIcon src='./images/icons/presentation.png' size='20px' />
      </Flex>
    </Button>
  )
}

PresentationButton.propTypes = {
  onClick: PropTypes.func
}
