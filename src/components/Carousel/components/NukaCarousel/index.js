import React from 'react'
import Carousel from 'nuka-carousel'
import styled from 'styled-components'

const Container = styled.div`
  height: 200px;
  padding: 20px 0;

  & img {
    width: 100%;
    height: 100%;
  }

  /* .slider-list {
    margin-bottom: 20px !important;
  } */

  .slider-slide img {
    /* margin: 20px 0 !important; */
    margin-bottom: 25px;
    margin-top: 13px;
  }

  .slider-slide img:hover {
    z-index: 4;
    transform: scale(1.2);
  }
`

const NukaCarousel = ({ children, options }) => {
  const config = {
    slidesToShow: 4,
    cellSpacing: 50,
    dragging: false,
    slidesToScroll: 1
  }

  const setting = { ...config, ...options }

  return (
    <Container>
      <Carousel {...setting}>
        {children}
      </Carousel>
    </Container>
  )
}

export default NukaCarousel
