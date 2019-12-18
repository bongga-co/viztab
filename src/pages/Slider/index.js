import React from 'react'
import { NukaCarousel as Carousel } from 'components/Carousel'

const Slider = () => {
  return (
    <>
      <Carousel>
        <div>
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide1' alt='' />
          <div />
        </div>
        <div>
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide2' alt='' />
          <div />
        </div>
        <div>
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide3' alt='' />
          <div />
        </div>
        <div>
          <img src='http://placehold.it/1000x400/ffffff/c0392b/&text=slide4' alt='' />
          <div />
        </div>
      </Carousel>
    </>
  )
}

export default Slider
