import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Container = styled.div`
  width: ${props => props.theme.sidebar.width}px;
  height: 100vh;
  background: ${props => props.theme.sidebar.background};
  padding: 10px;
  position: fixed;
  left: ${props => props.open ? 0 : -(props.theme.sidebar.width + 50)}px;
  top: 0;
  z-index: 10;
  transition: left 0.3s ease-in;

  & > div:first-child img {
    filter: invert(1);
  }

  & > div:nth-child(2) {
    overflow-y: scroll;
  }

  & .current {
    color: ${props => props.theme.sidebar.active};
  }
`

Container.propTypes = {
  open: PropTypes.bool
}

Container.defaultProps = {
  open: false
}
