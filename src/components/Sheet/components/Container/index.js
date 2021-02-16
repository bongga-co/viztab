import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 37vw;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: -27px;
  margin-bottom: 30px;
  box-shadow: 0 -5px 5px -5px #333;
  background-color: ${props => props.theme.sheet.background};

  ${props => props.source === 'grid' && css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: translate(0, ${props.position}px);
  `}
`
