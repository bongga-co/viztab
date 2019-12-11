import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.article`
  min-height: 200px;
  width: 100vw;

  & div {
    width: 100%;
    height: 100%;

    ${props => props.single && css`
      display: flex;
      justify-content: center;
    `}

    ${props => !props.interactive && css`
      pointer-events: none;
    `}
  }
`

Container.propTypes = {
  interactive: PropTypes.bool,
  single: PropTypes.bool
}

Container.defaultProps = {
  interactive: false,
  single: false
}

export default Container
