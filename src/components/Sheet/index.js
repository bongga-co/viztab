import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  height: 37vw;
  position: relative;
  margin-top: -27px;
  margin-bottom: 30px;
  box-shadow: 0 -5px 5px -5px #333;

  ${props => props.source === 'grid' && css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: translate(0, ${props.position}px);
  `}

  & .background,
  & .background__shadow,
  & .background__image,
  & .area {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  & .background {
    left: 0;
    right: 0;

    & .background__shadow {
      left: 0;
      background: #000;
      width: 30%;
      z-index: 2;

      &:before {
        content: '';
        position: absolute;
        z-index: 2;
        background-image: linear-gradient(to right,#000,transparent);
        top: 0;
        bottom: 0;
        left: 100%;
        width: 275px;
      }
    }

    & .background__image {
      right: 0;
      width: 70%;
      height: 100%;
      background-position: center 10%;
      background-size: cover;
      z-index: 1;
    }
  }

  & .area {
    left: 0;
    right: 0;
    height: 100%;
    z-index: 3;

    & .area__container {
      padding: 30px 70px;
      color: wheat;
    }
  }

  & .title {
    font-size: 45px;
    color: #fff;
    font-weight: 700;
  }

  & .description {
    font-size: 18px;
    color: #999;
    margin-top: 20px;
    max-width: 500px;
  }

  & .close {
    color: #303030;
    width: 40px;
    height: 40px;
    background: transparent;
    outline: none;
    border: none;
    position: absolute;
    top: 30px;
    right: 30px;
  }
`

export const Sheet = ({ data, source, position, onClose }) => {
  return (
    <Container source={source} position={position}>
      <div className='background'>
        <div className='background__shadow' />
        <div
          className='background__image'
          style={{ backgroundImage: `url(${data.imageUrl})` }}
        />
      </div>
      <div className='area'>
        <div className='area__container'>
          <div className='title'>{data.name}</div>
          <div className='description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
            eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
            quis quam congue, non fringilla orci placerat. Praesent sollicitudin
          </div>
        </div>
        <button className='close' onClick={onClose}>
          Close
        </button>
      </div>
    </Container>
  )
}

Sheet.propTypes = {
  data: PropTypes.object.isRequired,
  source: PropTypes.oneOf(['grid', 'slider']),
  position: PropTypes.number,
  onClose: PropTypes.func
}

Sheet.defaultProps = {
  source: 'slider'
}
