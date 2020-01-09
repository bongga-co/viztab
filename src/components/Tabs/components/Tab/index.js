import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const ListItem = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  ${props => props.active && css`
    border-bottom: 3px solid red;
  `}
`

export const Tab = ({ active, label, onClick }) => {
  const handleClick = () => onClick(label)

  return (
    <ListItem active={active === label} onClick={handleClick}>
      {label}
    </ListItem>
  )
}

Tab.propTypes = {
  active: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
