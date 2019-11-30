import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'

export const Card = styled(Box)`
  position: relative;
  background-color: ${props => props.background};
  border-radius: ${props => props.radius};

  & > img {
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
  
    ${props => !props.interactive && css`
      user-select: none;
      pointer-events: none;
    `}
  }
`

Card.propTypes = {
  radius: PropTypes.string,
  interactive: PropTypes.bool,
  background: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
}

Card.defaultProps = {
  interactive: false,
  background: '#ffffff',
  width: '100%',
  height: '100%'
}
