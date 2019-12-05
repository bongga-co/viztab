import styled from 'styled-components'
import ReactSlick from 'react-slick'

export const Slider = styled(ReactSlick)`
  height: 100%;
  width: 100%;
  
  & iframe {
    height: 95vh !important;
    width: 100vw !important;
  }
`
