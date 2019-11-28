import styled, { css } from 'styled-components'
import { Flex } from '@rebass/grid'
import PropTypes from 'prop-types'

const Container = styled(Flex)`
  height: ${props => props.height};
  background-color: ${props => props.background};

  ${props => props.show && css`
    position: absolute; 
    top: 0; 
    left: 0; 
    bottom: 0; 
    right: 0; 
    z-index: 10;
  `}
`

Container.propTypes = {
  height: PropTypes.string,
  background: PropTypes.string
}

Container.defaultProps = {
  background: 'rgba(3, 3, 3, 1)'
}

export default Container
