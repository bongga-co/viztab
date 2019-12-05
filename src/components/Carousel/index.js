import React from 'react'
import PropTypes from 'prop-types'
import { Report } from 'components/Report'
import { Slider } from './components/Slider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = ({ data }) => {
  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000
  }

  return (
    <Slider {...settings}>
      {data.map(item => (
        <Report key={item.id} data={item} />
      ))}
    </Slider>
  )
}

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      embedUrl: PropTypes.string.isRequired,
      posterUrl: PropTypes.string
    })
  )
}
