import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

export const Item = styled.div`
  width: ${props => `calc((100% / ${props.items}) - ${props.gap})`};
  height: ${props => props.height};
  padding: 2.125em 0 1.25em;
  user-select: none;
  position: absolute;
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.75);
  transition: background-color 0.1s ease-in-out;
  cursor: grab;
  text-align: center; 

  ${props => props.active && css`
    background: rgba(255, 255, 255, 0.9);
    cursor: grabbing;
  `}
`

Item.propTypes = {
  items: PropTypes.number,
  gap: PropTypes.string,
  height: PropTypes.string,
  active: PropTypes.bool
}

Item.defaultProps = {
  items: 4,
  gap: '26px',
  height: '90px',
  active: false
}
