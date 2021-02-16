import React from 'react'

export const TabContent = ({ active, content }) => {
  return (
    <div>
      {content.map((child) => {
        if (child.props.label !== active) return undefined
        return child.props.children
      })}
    </div>
  )
}
