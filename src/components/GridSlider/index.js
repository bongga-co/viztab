import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'
import _ from 'lodash'
import { Items } from './components/Items'
import { Item } from './components/Item'

export const GridSlider = ({ data }) => {
  const [mouse, setMouse] = useState([0, 0])
  const [delta, setDelta] = useState([0, 0])
  const [lastPress, setLastPress] = useState(null)
  const [currentColumn, setCurrentColumn] = useState(null)
  const [isPressed, setIsPressed] = useState(false)
  const [order, setOrder] = useState(data)
  const [isResizing, setIsResizing] = useState(false)

  const gutterPadding = 21
  const clamp = (n, min, max) => Math.max(Math.min(n, max), min)
  const getColumnWidth = () => (window.innerWidth / data.length) - (gutterPadding / data.length)
  const height = 110
  const springSetting1 = { stiffness: 180, damping: 10 }
  const springSetting2 = { stiffness: 150, damping: 16 }
  let width = getColumnWidth()
  let layout = null
  let resizeTimeout = null

  useEffect(() => {
    window.addEventListener('touchmove', handleTouchMove)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchend', handleMouseUp)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchend', handleMouseUp)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleTouchStart = (key, currentColumn, pressLocation, e) => {
    handleMouseDown(key, currentColumn, pressLocation, e.touches[0])
  }

  const handleTouchMove = (e) => {
    e.preventDefault()
    handleMouseMove(e.touches[0])
  }

  const handleMouseMove = ({ pageX, pageY }) => {
    if (isPressed) {
      const mouse = [pageX - delta[0], pageY - delta[1]]
      const colTo = clamp(Math.floor((mouse[0] + (width / 2)) / width), 0, 2)
      const rowTo = clamp(Math.floor((mouse[1] + (height / 2)) / height), 0, 100)
      const rowFrom = order[currentColumn].indexOf(lastPress)
      const newOrder = reinsert(order, currentColumn, rowFrom, colTo, rowTo)

      setMouse(mouse)
      setOrder(newOrder)
      setCurrentColumn(colTo)
    }
  }

  const handleMouseDown = (key, currentColumn, press, page) => {
    setLastPress(key)
    setCurrentColumn(currentColumn)
    setIsPressed(true)
    // setDelta([page[0] - pressX, page[1] - pressY])
    // setMouse([pressX, pressY])
  }

  const handleMouseUp = () => {
    setIsPressed(false)
    setDelta([0, 0])
  }

  const handleResize = () => {
    clearTimeout(resizeTimeout)
    applyResizingState(true)
    resizeTimeout = setTimeout(() => applyResizingState(false), 100)
  }

  const applyResizingState = (isResizing) => {
    setIsResizing(isResizing)
    calculateVisiblePositions(data)
  }

  const reinsert = (array, colFrom, rowFrom, colTo, rowTo) => {
    const _array = array.slice(0)
    const val = _array[colFrom][rowFrom]

    _array[colFrom].splice(rowFrom, 1)
    _array[colTo].splice(rowTo, 0, val)

    calculateVisiblePositions(_array)

    return _array
  }

  const calculateVisiblePositions = (newOrder) => {
    width = getColumnWidth()
    layout = newOrder.map((column, col) => {
      return _.range(column.length + 1).map((item, row) => {
        return [width * col, height * row]
      })
    })
  }

  calculateVisiblePositions(data)

  return (
    <Items>
      {order.map((column, colIndex) => {
        return (
          column.map((row) => {
            let style
            let x
            let y
            const visualPosition = order[colIndex].indexOf(row)
            const isActive = (row === lastPress && colIndex === currentColumn && isPressed)

            if (isActive) {
              [x, y] = mouse
              style = {
                translateX: x,
                translateY: y,
                scale: spring(1.1, springSetting1)
              }
            } else if (isResizing) {
              [x, y] = layout[colIndex][visualPosition]
              style = {
                translateX: x,
                translateY: y,
                scale: 1
              }
            } else {
              [x, y] = layout[colIndex][visualPosition]
              style = {
                translateX: spring(x, springSetting2),
                translateY: spring(y, springSetting2),
                scale: spring(1, springSetting1)
              }
            }

            return (
              <Motion key={row} style={style}>
                {({ translateX, translateY, scale }) => (
                  <Item
                    onMouseDown={() => handleMouseDown(null, row, colIndex, [x, y])}
                    onTouchStart={() => handleTouchStart(null, row, colIndex, [x, y])}
                    active={isActive}
                    style={{
                      transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
                      zIndex: (row === lastPress && colIndex === currentColumn) ? 99 : visualPosition
                    }}
                  >
                    {row + 1}
                  </Item>
                )}
              </Motion>
            )
          })
        )
      })}
    </Items>
  )
}

GridSlider.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array)
}

GridSlider.defaultProps = {
  data: [
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7]
  ]
}
