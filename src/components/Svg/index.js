import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * componente para envolver imagenes svg.
 * @component
 * @example
 * <Svg size='20px' color='red'>
 *  {children}
 * </Svg>
 */
export const Svg = styled.svg`
  width: ${props => props.width || props.size};
  height: ${props => props.height || props.size};
  fill: ${props => props.color};
`

Svg.propTypes = {
  /**
   * ancho de la imágen
   */
  width: PropTypes.string,
  /**
   * altura de la imágen
   */
  height: PropTypes.string,
  /**
   * tamaño para alto y ancho
   */
  size: PropTypes.string,
  /**
   * color de la imágen
   */
  color: PropTypes.string
}

Svg.defaultProps = {
  size: '24px',
  color: '#303030'
}
