import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { GridLayout } from 'components/Grid'
import { Report } from 'components/Report'
import { Sheet } from 'components/Sheet'
import styled, { withTheme } from 'styled-components'
import { useResize } from 'hooks/resize'

const Container = styled.div`
  position: relative;
`

const SheetGrid = memo(({ theme, data, position, onDetail, onClose }) => {
  const screen = useResize()
  const [selected, setSelected] = useState(null)
  const sidebarWidth = theme.sidebar.width

  return (
    <Container>
      <GridLayout
        className='layout'
        margin={[50, 50]}
        width={screen.width - sidebarWidth.slice(0, -2) - 60}
        layout={data}
        cols={4}
        onLayoutChange={(e) => null}
      >
        {data.map(item => (
          <div key={item.i}>s
            <Report
              data={item}
              withImages
              active={selected !== null && item.i === selected.i}
              onDetailPressed={(data, e) => {
                setSelected(data)
                onDetail && onDetail(data, e)
              }}
            />
          </div>
        ))}
      </GridLayout>
      {selected && (
        <Sheet
          source='grid'
          data={selected}
          position={position.top + window.scrollY - 53}
          onClose={() => {
            setSelected(null)
            onClose && onClose()
          }}
        />
      )}
    </Container>
  )
})

SheetGrid.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.object,
  onDetail: PropTypes.func,
  onClose: PropTypes.func
}

export default withTheme(SheetGrid)
