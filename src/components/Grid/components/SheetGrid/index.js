import React, { useState, memo } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'components/Grid'
import { Report } from 'components/Report'
import { Sheet } from 'components/Sheet'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
`

const SheetGrid = memo(({ data, position, onDetail, onClose }) => {
  const [selected, setSelected] = useState(null)

  return (
    <Container>
      <Grid
        className='layout'
        margin={[50, 80]}
        width={1200}
        layout={data}
        cols={4}
        isResizable={false}
        isDraggable={false}
        onLayoutChange={(e) => null}
      >
        {data.map(item => (
          <div key={item.i}>
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
      </Grid>
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

export default SheetGrid
