import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Mark = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 4px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  z-index: 4;
  opacity: ${props => props.active ? 1 : 0};

  &:before,
  &:after {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    top: 100%;
    left: 50%;
    margin-left: -13px;
    border-style: solid;
    border-width: 10px 13px 0 13px;
  }

  &:before {
    border-color: rgba(0, 0, 0, 0.15) transparent transparent transparent;
    margin-top: 5px;
  }

  &:after {
    margin-top: 4px;
    border-color: ${props => props.theme.content.fullscreen} transparent transparent transparent;
  }
`

Mark.propTypes = {
  active: PropTypes.bool
}

PropTypes.defaultProps = {
  active: false
}
