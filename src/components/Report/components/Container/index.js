import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const Container = styled.article`
  position: relative;
  min-height: 100px;
  width: 100%;
  height: 100%;
  outline: none;
  pointer-events: ${props => props.canInteract ? 'all' : 'none'};

  & > div iframe, & > img {
    width: 100% !important;
    height: 100% !important;
  }

  & .__overlay {
    opacity: ${props => props.active ? 1 : 0};
  }

  ${props => !props.active && css`
    &:hover {
      transform: scale(1.2);
      transition-duration: 500ms;
      transition-delay: 0ms;
      cursor: pointer;

      & .__overlay {
        opacity: 1;
      }
    }
  `}
`

Container.propTypes = {
  canInteract: PropTypes.bool,
  active: PropTypes.bool
}

Container.defaultProps = {
  canInteract: true,
  active: false
}
