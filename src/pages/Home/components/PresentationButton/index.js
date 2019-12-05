import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import { Text } from 'components/Text'
import { CustomIcon } from 'components/Icon'
import { Button } from 'components/Button'

export const PresentationButton = ({ onClick }) => {
  return (
    <Button
      radius='50px'
      background='red'
      padding='10px 15px'
      onClick={onClick}
    >
      <Flex alignItems='center'>
        <Text textcolor='#fff'>Presentation Mode</Text>&nbsp;&nbsp;
        <CustomIcon src='./images/presentation.png' size='20px' />
      </Flex>
    </Button>
  )
}

PresentationButton.propTypes = {
  onClick: PropTypes.func
}
