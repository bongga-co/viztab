import React, { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Report } from 'components/Report'
import { Slider } from './components/Slider'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Carousel = ({ data }) => {
  const [speed, setSpeed] = useState(data[0].time || 15000)
  const slider = useRef(null)

  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    autoplay: true,
    draggable: false,
    autoplaySpeed: speed,
    beforeChange: (oldIndex, newIndex) => {
      const currentReport = data[newIndex]
      setSpeed(currentReport.time)
    }
  }

  useEffect(() => {
    const onKeyPressed = e => {
      switch (e.code) {
        case 'ArrowLeft':
          slider.current && slider.current.slickPrev()
          break
        case 'ArrowRight':
          slider.current && slider.current.slickNext()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', onKeyPressed)
    return () => {
      document.removeEventListener('keydown', onKeyPressed)
    }
  })

  return (
    <Slider ref={slider} {...settings}>
      {data.map(item => (
        <Report
          key={item.id}
          data={item}
          onClick={() => slider.current.slickPause()}
        />
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
