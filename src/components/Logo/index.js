import React from 'react'
import { withTheme } from 'styled-components'
import { APP_NAME } from 'globals/constants'

export const Logo = withTheme(({ theme }) => (
  <img src={theme.logo.src} alt={APP_NAME} height={40} />
))
