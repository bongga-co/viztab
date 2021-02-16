import React from 'react'
import { ArrowDown } from 'components/Icon'

export const ButtonDetail = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <ArrowDown size='20px' color='white' />
    </div>
  )
}
