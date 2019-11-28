import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
  background: ${props => props.background};
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
`

Button.propTypes = {
  background: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string
}

Button.defaultProps = {
  background: 'none'
}
