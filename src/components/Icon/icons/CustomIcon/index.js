import React from 'react'
import PropTypes from 'prop-types'

const CustomIcon = ({ src, size, style }) => (
  <img
    src={src}
    alt=''
    width={size}
    height={size}
    style={style}
  />
)

CustomIcon.propTypes = {
  src: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.object
}

CustomIcon.defaultProps = {
  size: '30px'
}

export default CustomIcon
