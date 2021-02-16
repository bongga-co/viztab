import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Button = styled.button`
  background: ${props => props.background};
  color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
  border-radius: ${props => props.radius};
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`

Button.propTypes = {
  background: PropTypes.string,
  radius: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string
}

Button.defaultProps = {
  background: 'none',
  padding: '0px',
  margin: '0px'
}
