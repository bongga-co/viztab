import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import Slick from 'react-slick'
import styled from 'styled-components'
import { ArrowLeft, ArrowRight } from 'components/Icon'

const Container = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 3;

  h3 {
    margin: 0 ${props => props.gap * 0.5}px;
  }

  .slick-slider {
    width: 100%;
    position: relative;
    display: block;
    box-sizing: border-box;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }

  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 0;
    padding: 0;
    margin-right: ${props => props.gap * 0.5}px;
  }

  .slick-list:focus {
    outline: none;
  }

  .slick-list.dragging {
    cursor: pointer;
    cursor: hand;
  }

  .slick-slider .slick-track,
  .slick-slider .slick-list {
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }

  .slick-track:before,
  .slick-track:after {
    display: table;
    content: '';
  }

  .slick-track:after {
    clear: both;
  }

  .slick-loading .slick-track {
    visibility: hidden;
  }

  .slick-slide {
    display: none;
    width: 100%;
    height: 100%;
    min-height: 10px;
    
    & > div {
      & > div {
        outline: none;
        position: relative;
        width: auto !important;
        max-width: 100% !important;
        max-height: ${props => props.height} !important;
        margin: ${props => props.gap * 0.5}px;
        display: flex !important;
        justify-content: center;
        align-items: center;

        & img, & iframe {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover;
        }
      }
    }
  }

  [dir='rtl'] .slick-track {
    justify-content: flex-end;
  }

  .slick-slide img {
    display: block;
  }

  .slick-slide.slick-loading img {
    display: none;
  }

  .slick-slide.dragging img {
    pointer-events: none;
  }

  .slick-initialized .slick-slide {
    display: block;
  }

  .slick-loading .slick-slide {
    visibility: hidden;
  }

  .slick-vertical .slick-slide {
    display: block;
    height: auto;
  }

  .slick-arrow {
    position: absolute;
    height: 30px;
    top: calc((100% - 30px) / 2);
    z-index: 5;
    cursor: pointer;
  }

  .slick-arrow.slick-hidden {
    display: none;
  }

  .slick-prev {
    left: 0;
  }

  .slick-next {
    right: ${props => props.gap * 0.5}px;
  }
`

const Carousel = ({ title, gap, height, options, children }) => {
  const ref = useRef(null)

  const setting = {
    dots: false,
    arrows: true,
    infinite: true,
    draggable: false,
    prevArrow: <ArrowLeft onClick={() => ref.current.slickPrev()} />,
    nextArrow: <ArrowRight onClick={() => ref.current.slickNext()} />,
    ...options
  }

  return (
    <Container gap={gap} height={height}>
      {title && <h3>{title}</h3>}
      <Slick ref={ref} {...setting}>{children}</Slick>
    </Container>
  )
}

Carousel.propTypes = {
  gap: PropTypes.number,
  height: PropTypes.string
}

Carousel.defaultProps = {
  gap: 40,
  height: '200px'
}

export default Carousel
