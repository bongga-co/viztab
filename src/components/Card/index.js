import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'

export const Card = styled(Box)`
  position: relative;
  background-color: white;
  border-radius: ${props => props.radius};

  & > * {
    width: 100${props => props.fullscreen ? 'vw' : '%'};
    height: 100${props => props.fullscreen ? 'vh' : '%'};
    object-fit: cover;
    background-size: cover;
  
    ${props => !props.interactive && css`
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -o-user-select: none;
      user-select: none;
      pointer-events: none;
    `}
  }

  ${props => props.hover && css`
    &:hover > article {
      transform: scale(1.2);
      transition-duration: 500ms;
      transition-delay: 0ms;
    }

    &:hover {
      z-index: 10;
    }

    &:hover .overlay {
      z-index: 10;
      transform: scale(1.3);
      background-image: ${props => props.theme.panel.itemShadow};
      width: 100;
      height: 100%;
      bottom: 0;
      top: 0;
    }
  `}
`

Card.propTypes = {
  radius: PropTypes.string,
  shadow: PropTypes.bool,
  fullscreen: PropTypes.bool,
  interactive: PropTypes.bool,
  hover: PropTypes.bool
}

Card.defaultProps = {
  shadow: false,
  fullscreen: false,
  interactive: false,
  hover: false
}
