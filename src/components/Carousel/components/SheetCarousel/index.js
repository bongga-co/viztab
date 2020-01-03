import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'components/Carousel'
import { Report } from 'components/Report'
import { Sheet } from 'components/Sheet'

const SheetCarousel = memo(({ title, data }) => {
  const [selected, setSelected] = useState(null)

  const options = {
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <>
      <Carousel options={options} title={title}>
        {data.map((item, index) => (
          <div key={item.i}>
            <Report
              data={item}
              active={selected !== null && item.i === selected.i}
              withImages
              onDetailPressed={(data, e) => setSelected(data)}
            />
          </div>
        ))}
      </Carousel>
      {selected && (
        <Sheet data={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
})

SheetCarousel.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired
}

export default SheetCarousel
