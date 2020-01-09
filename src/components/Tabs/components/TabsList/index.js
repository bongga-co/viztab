import React from 'react'
import { Tab } from '../Tab'

export const TabsList = ({ data, active, onClick }) => {
  return (
    <ol>
      {data.map((child) => {
        const { label } = child.props

        return (
          <Tab
            key={label}
            active={active}
            label={label}
            onClick={onClick}
          />
        )
      })}
    </ol>
  )
}
