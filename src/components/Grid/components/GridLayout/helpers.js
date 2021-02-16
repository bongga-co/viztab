import React from 'react'
import isEqual from 'lodash.isequal'

const heightWidth = { x: 'w', y: 'h' }

export const getContainerHeight = (layout, padding, itemMargin, itemHeight) => {
  const rows = getRowsSize(layout)
  const yPadding = padding ? padding[1] : itemMargin[1]

  return (rows * itemHeight + (rows - 1) * itemMargin[1] + yPadding * 2)
}

export const getRowsSize = (layout = []) => {
  let max = 0
  let y

  layout.forEach((item, i) => {
    y = item.y + item.h

    if (y > max) {
      max = y
    }
  })

  return max
}

export const syncLayout = ({ layout, children, cols, compactType }) => {
  const initialLayout = layout || []
  let childLayout = []

  React.Children.forEach(children, (child, i) => {
    const exists = getLayoutItem(initialLayout, String(child.key))

    if (exists) {
      childLayout[i] = cloneLayoutItem(exists)
    } else {
      const g = child.props['data-grid']

      if (g) {
        childLayout[i] = cloneLayoutItem({ ...g, i: child.key })
      } else {
        childLayout[i] = cloneLayoutItem({
          w: 1,
          h: 1,
          x: 0,
          y: getRowsSize(childLayout),
          id: String(child.key)
        })
      }
    }
  })

  childLayout = correctBounds(childLayout, { cols: cols })
  childLayout = compact(layout, compactType, cols)

  return childLayout
}

export const getLayoutItem = (layout, id) => {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (layout[i].id === id) return layout[i]
  }
}

export const correctBounds = (layout, bounds) => {
  const collidesWith = getStatics(layout)

  for (let i = 0, len = layout.length; i < len; i++) {
    const l = layout[i]

    if (l.x + l.w > bounds.cols) l.x = bounds.cols - l.w
    if (l.x < 0) {
      l.x = 0
      l.w = bounds.cols
    }
    if (!l.static) collidesWith.push(l)
    else {
      while (getFirstCollision(collidesWith, l)) {
        l.y++
      }
    }
  }
  return layout
}

export const getFirstCollision = (layout, layoutItem) => {
  for (let i = 0, len = layout.length; i < len; i++) {
    if (collides(layout[i], layoutItem)) return layout[i]
  }
}

export const getStatics = (layout) => {
  return layout.filter(l => l.static)
}

export const compact = (layout, compactType, cols) => {
  const compareWith = getStatics(layout)
  const sorted = sortLayoutItems(layout, compactType)
  const out = Array(layout.length)

  for (let i = 0, len = sorted.length; i < len; i++) {
    let l = cloneLayoutItem(sorted[i])

    if (!l.static) {
      l = compactItem(compareWith, l, compactType, cols, sorted)
      compareWith.push(l)
    }

    out[layout.indexOf(sorted[i])] = l
    l.moved = false
  }

  return out
}

export const cloneLayout = (layout) => {
  const newLayout = Array(layout.length)

  for (let i = 0, len = layout.length; i < len; i++) {
    newLayout[i] = cloneLayoutItem(layout[i])
  }

  return newLayout
}

export const cloneLayoutItem = (layoutItem) => {
  return {
    w: layoutItem.w,
    h: layoutItem.h,
    x: layoutItem.x,
    y: layoutItem.y,
    id: layoutItem.id,
    minW: layoutItem.minW,
    maxW: layoutItem.maxW,
    minH: layoutItem.minH,
    maxH: layoutItem.maxH,
    moved: Boolean(layoutItem.moved),
    static: Boolean(layoutItem.static),
    isDraggable: layoutItem.isDraggable,
    isResizable: layoutItem.isResizable
  }
}

export const childrenEqual = (a, b) => {
  return isEqual(
    React.Children.map(a, c => c.key),
    React.Children.map(b, c => c.key)
  )
}

export const collides = (l1, l2) => {
  if (l1.i === l2.i) return false
  if (l1.x + l1.w <= l2.x) return false
  if (l1.x >= l2.x + l2.w) return false
  if (l1.y + l1.h <= l2.y) return false
  if (l1.y >= l2.y + l2.h) return false

  return true
}

export const sortLayoutItems = (layout, compactType) => {
  if (compactType === 'horizontal') return sortLayoutItemsByColRow(layout)
  else return sortLayoutItemsByRowCol(layout)
}

export const compactItem = (compareWith, l, compactType, cols, fullLayout) => {
  const compactV = compactType === 'vertical'
  const compactH = compactType === 'horizontal'

  if (compactV) {
    l.y = Math.min(getRowsSize(compareWith), l.y)

    while (l.y > 0 && !getFirstCollision(compareWith, l)) {
      l.y--
    }
  } else if (compactH) {
    l.y = Math.min(getRowsSize(compareWith), l.y)
    while (l.x > 0 && !getFirstCollision(compareWith, l)) {
      l.x--
    }
  }

  let collides
  while ((collides = getFirstCollision(compareWith, l))) {
    if (compactH) {
      resolveCompactionCollision(fullLayout, l, collides.x + collides.w, 'x')
    } else {
      resolveCompactionCollision(fullLayout, l, collides.y + collides.h, 'y')
    }

    if (compactH && l.x + l.w > cols) {
      l.x = cols - l.w
      l.y++
    }
  }

  return l
}

const resolveCompactionCollision = (layout, item, moveToCoord, axis) => {
  const sizeProp = heightWidth[axis]
  item[axis] += 1

  const itemIndex = layout
    .map(layoutItem => {
      return layoutItem.i
    })
    .indexOf(item.i)

  for (let i = itemIndex + 1; i < layout.length; i++) {
    const otherItem = layout[i]

    if (otherItem.static) continue
    if (otherItem.y > item.y + item.h) break

    if (collides(item, otherItem)) {
      resolveCompactionCollision(
        layout,
        otherItem,
        moveToCoord + item[sizeProp],
        axis
      )
    }
  }

  item[axis] = moveToCoord
}

export const sortLayoutItemsByColRow = (layout) => {
  return [].concat(layout).sort((a, b) => {
    if (a.x > b.x || (a.x === b.x && a.y > b.y)) {
      return 1
    }
    return -1
  })
}

export const sortLayoutItemsByRowCol = (layout) => {
  return [].concat(layout).sort((a, b) => {
    if (a.y > b.y || (a.y === b.y && a.x > b.x)) {
      return 1
    } else if (a.y === b.y && a.x === b.x) {
      return 0
    }
    return -1
  })
}

export const moveElement = (
  layout,
  l,
  x,
  y,
  isUserAction,
  preventCollision,
  compactType,
  cols
) => {
  if (l.static && l.isDraggable !== true) return layout
  if (l.y === y && l.x === x) return layout

  const oldX = l.x
  const oldY = l.y

  if (typeof x === 'number') l.x = x
  if (typeof y === 'number') l.y = y

  l.moved = true

  let sorted = sortLayoutItems(layout, compactType)
  const movingUp = compactType === 'vertical' && typeof y === 'number'
    ? oldY >= y : compactType === 'horizontal' && typeof x === 'number'
      ? oldX >= x : false

  if (movingUp) sorted = sorted.reverse()

  const collisions = getAllCollisions(sorted, l)

  if (preventCollision && collisions.length) {
    l.x = oldX
    l.y = oldY
    l.moved = false

    return layout
  }

  for (let i = 0, len = collisions.length; i < len; i++) {
    const collision = collisions[i]

    if (collision.moved) continue

    if (collision.static) {
      layout = moveElementAwayFromCollision(
        layout,
        collision,
        l,
        isUserAction,
        compactType,
        cols
      )
    } else {
      layout = moveElementAwayFromCollision(
        layout,
        l,
        collision,
        isUserAction,
        compactType,
        cols
      )
    }
  }

  return layout
}

export const moveElementAwayFromCollision = (
  layout,
  collidesWith,
  itemToMove,
  isUserAction,
  compactType,
  cols
) => {
  const compactH = compactType === 'horizontal'
  const compactV = compactType !== 'horizontal'
  const preventCollision = collidesWith.static

  if (isUserAction) {
    isUserAction = false

    const fakeItem = {
      x: compactH ? Math.max(collidesWith.x - itemToMove.w, 0) : itemToMove.x,
      y: compactV ? Math.max(collidesWith.y - itemToMove.h, 0) : itemToMove.y,
      w: itemToMove.w,
      h: itemToMove.h,
      i: '-1'
    }

    if (!getFirstCollision(layout, fakeItem)) {
      return moveElement(
        layout,
        itemToMove,
        compactH ? fakeItem.x : undefined,
        compactV ? fakeItem.y : undefined,
        isUserAction,
        preventCollision,
        compactType,
        cols
      )
    }
  }

  return moveElement(
    layout,
    itemToMove,
    compactH ? itemToMove.x + 1 : undefined,
    compactV ? itemToMove.y + 1 : undefined,
    isUserAction,
    preventCollision,
    compactType,
    cols
  )
}

export const getAllCollisions = (layout, layoutItem) => {
  return layout.filter(l => collides(l, layoutItem))
}

export const validateLayout = (layout, contextName = 'Layout') => {
  const subProps = ['x', 'y', 'w', 'h']

  if (!Array.isArray(layout)) { throw new Error(`${contextName} must be an array!`) }

  for (let i = 0, len = layout.length; i < len; i++) {
    const item = layout[i]

    for (let j = 0; j < subProps.length; j++) {
      if (typeof item[subProps[j]] !== 'number') {
        throw new Error(
          'ReactGridLayout: ' +
            contextName +
            '[' +
            i +
            '].' +
            subProps[j] +
            ' must be a number!'
        )
      }
    }
    if (item.i && typeof item.i !== 'string') {
      throw new Error(
        'ReactGridLayout: ' + contextName + '[' + i + '].i must be a string!'
      )
    }
    if (item.static !== undefined && typeof item.static !== 'boolean') {
      throw new Error(
        'ReactGridLayout: ' +
          contextName +
          '[' +
          i +
          '].static must be a boolean!'
      )
    }
  }
}
