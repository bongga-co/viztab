import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Items = styled.div`
  padding: ${props => props.padding};
`

Items.propTypes = {
  padding: PropTypes.string
}

Items.defaultProps = {
  padding: '21px'
}
