import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { APP_NAME } from 'globals/constants'

export const Logo = withTheme(({ theme, size }) => (
  <img src={theme.logo.src} alt={APP_NAME} height={size} />
))

Logo.propTypes = {
  size: PropTypes.number
}

Logo.defaultProps = {
  size: 40
}
