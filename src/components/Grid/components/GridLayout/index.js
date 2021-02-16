import React, { useState, useEffect, memo } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { getContainerHeight, syncLayout, validateLayout, getLayoutItem } from './helpers'

import GridItem from './components/GridItem'

const Container = styled.div`
  height: ${props => props.height}px;
  position: relative;
  transition: height 200ms ease;

  & .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }

  & .react-grid-item.cssTransforms {
    transition-property: transform;
  }

  & .react-grid-item.resizing {
    z-index: 1;
    will-change: width, height;
  }
  
  & .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 3;
    will-change: transform;
  }
  
  & .react-grid-item.dropping {
    visibility: hidden;
  }
  
  & .react-grid-item.react-grid-placeholder {
    background: red;
    opacity: 0.2;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
  
  & .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  
  & .react-grid-item > .react-resizable-handle::after {
    content: "";
    position: absolute;
    right: 3px;
    bottom: 3px;
    width: 5px;
    height: 5px;
    border-right: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 2px solid rgba(0, 0, 0, 0.4);
  }
`

const GridLayout = props => {
  const [layout, setLayout] = useState([])
  const [mounted, setMounted] = useState(false)
  const [droppingPosition] = useState({})

  // const [activeDrag] = useState(null)
  // const [oldDragItem] = useState(null)
  // const [oldLayout] = useState(null)
  // const [oldResizeItem] = useState(null)
  // const [droppingDOMNode] = useState(null)
  // const [children] = useState([])

  useEffect(() => {
    const layout = syncLayout(props)
    setLayout(layout)
  }, [props])

  // useEffect(() => {
  //   

  //   setLayout(syncedLayout)
  //   setMounted(true)

  //   return () => {
  //     setMounted(false)
  //   }
  // }, [props])

  const height = getContainerHeight(
    layout,
    props.padding,
    props.itemMargin,
    props.itemHeight
  )

  const displayGridItem = (child, isDroppingItem) => {console.log(child)
    if (!child || !child.key) return
    const ly = getLayoutItem(layout, String(child.key))

    if (!ly) return null

    const draggable = typeof ly.isDraggable === 'boolean'
      ? ly.isDraggable
      : !ly.static && props.isDraggable

    const resizable = typeof ly.isResizable === 'boolean'
      ? ly.isResizable
      : !ly.static && props.isResizable

    return (
      <GridItem
        containerWidth={props.width}
        cols={props.cols}
        margin={props.itemMargin}
        containerPadding={props.padding || props.itemMargin}
        maxRows={props.maxRows}
        rowHeight={props.itemHeight}
        cancel={props.draggableCancel}
        handle={props.draggableHandle}
        // onDragStop={onDragStop}
        // onDragStart={onDragStart}
        // onDrag={onDrag}
        // onResizeStart={onResizeStart}
        // onResize={onResize}
        // onResizeStop={onResizeStop}
        isDraggable={draggable}
        isResizable={resizable}
        useCSSTransforms={props.useCSSTransforms && mounted}
        usePercentages={!mounted}
        transformScale={props.transformScale}
        w={ly.w}
        h={ly.h}
        x={ly.x}
        y={ly.y}
        i={ly.id}
        minH={ly.minH}
        minW={ly.minW}
        maxH={ly.maxH}
        maxW={ly.maxW}
        static={ly.static}
        droppingPosition={isDroppingItem ? droppingPosition : undefined}
      >
        {child}
      </GridItem>
    )
  }
  console.log(layout)
  return (
    <Container height={height}>
      {React.Children.map(props.children, child =>
        displayGridItem(child)
      )}
    </Container>
  )
}

GridLayout.propTypes = {
  width: PropTypes.number,
  cols: PropTypes.number,
  draggableCancel: PropTypes.string,
  draggableHandle: PropTypes.string,
  compactType: PropTypes.oneOf(['vertical', 'horizontal']),
  layout: (props) => {
    const layout = props.layout
    if (layout === undefined) return
    validateLayout(layout, 'layout')
  },
  itemMargin: PropTypes.arrayOf(PropTypes.number),
  padding: PropTypes.arrayOf(PropTypes.number),
  itemHeight: PropTypes.number,
  maxRows: PropTypes.number,
  isDraggable: PropTypes.bool,
  isResizable: PropTypes.bool,
  isDroppable: PropTypes.bool,
  useCSSTransforms: PropTypes.bool,
  droppingItem: PropTypes.shape({
    id: PropTypes.string.isRequired,
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired
  }),
  children: (props, propName) => {
    const children = props[propName]
    const keys = {}

    React.Children.forEach(children, (child) => {
      if (keys[child.key]) {
        throw new Error(`Duplicate child key ${child.key}`)
      }
      keys[child.key] = true
    })
  },
  onLayoutChange: PropTypes.func,
  onDragStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragStop: PropTypes.func,
  onResizeStart: PropTypes.func,
  onResize: PropTypes.func,
  onResizeStop: PropTypes.func,
  onDrop: PropTypes.func
}

GridLayout.defaultProps = {
  width: window.screen.width,
  cols: 12,
  draggableHandle: '',
  draggableCancel: '',
  padding: null,
  itemHeight: 150,
  maxRows: Infinity,
  layout: [],
  itemMargin: [10, 10],
  isDraggable: true,
  isResizable: true,
  isDroppable: false,
  transformScale: 1,
  compactType: 'horizontal',
  useCSSTransforms: true,
  droppingItem: { id: '__dropping-elem__', h: 1, w: 1 }
  // onLayoutChange: noop,
  // onDragStart: noop,
  // onDrag: noop,
  // onDragStop: noop,
  // onResizeStart: noop,
  // onResize: noop,
  // onResizeStop: noop,
  // onDrop: noop
}

export default memo(GridLayout)
