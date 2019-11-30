import React from 'react'
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout'
import './styles/grid.css'
import './styles/resizable.css'

export default ({ responsive, children, ...rest }) => {
  const ResponsiveGridLayout = WidthProvider(Responsive)

  if (responsive) {
    return (
      <ResponsiveGridLayout {...rest}>
        {children}
      </ResponsiveGridLayout>
    )
  }

  return (
    <GridLayout {...rest}>
      {children}
    </GridLayout>
  )
}
