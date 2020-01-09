import styled from 'styled-components'
import { Flex } from '@rebass/grid'
import PropTypes from 'prop-types'

export const Overlay = styled(Flex).attrs({
  className: '__overlay'
})`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.background || props.theme.content.itemShadow};
  z-index: ${props => props.elevation};
  padding: 0;
  transition: opacity .5s;
  height: 100%;
  width: 100%;
`

Overlay.propTypes = {
  background: PropTypes.string,
  elevation: PropTypes.number
}

Overlay.defaultProps = {
  elevation: 5
}
