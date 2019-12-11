import React from 'react'
import GridLayout, { Responsive, WidthProvider } from 'react-grid-layout'
import styled, { css } from 'styled-components'
import { useSelector } from 'react-redux'
import './styles/grid.css'
import './styles/resizable.css'

const Container = styled.div`
  ${props => props.fullscreen && css`
    & .react-grid-layout {
      height: 100% !important;
      overflow: hidden;
    }
  `}
`

export default ({ responsive, children, ...rest }) => {
  const ResponsiveGridLayout = WidthProvider(Responsive)
  const fullMode = useSelector(state => state.ui.fullscreen.fullscreen)

  if (responsive) {
    return (
      <Container fullscreen={fullMode}>
        <ResponsiveGridLayout {...rest}>
          {children}
        </ResponsiveGridLayout>
      </Container>
    )
  }

  return (
    <Container fullscreen={fullMode}>
      <GridLayout {...rest}>
        {children}
      </GridLayout>
    </Container>
  )
}
