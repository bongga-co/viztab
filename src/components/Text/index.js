import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Box } from '@rebass/grid'

export const Text = styled(Box).attrs(props => ({ as: props.tag }))`
  color: ${props => props.textcolor};
  font-size: ${props => props.fontsize};
  font-weight: ${props => props.fontweight};
  font-style: ${props => props.fontstyle};
  font-family: ${props => props.fontfamily};
  text-transform: ${props => props.caps};
  text-align: ${props => props.align};
`

Text.propTypes = {
  tag: PropTypes.string,
  caps: PropTypes.string,
  fontsize: PropTypes.string,
  textcolor: PropTypes.string,
  fontweight: PropTypes.number,
  align: PropTypes.string,
  fontfamily: PropTypes.string,
  fontstyle: PropTypes.string
}

Text.defaultProps = {
  tag: 'p',
  fontsize: '0.8em'
}
