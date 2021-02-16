import styled, { css } from 'styled-components'

export default styled.li`
  & {
    a {
      padding: 0.09rem 1.5rem;
      white-space: nowrap;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      align-items: center;
      font-size: .9rem;
    }

    &:hover {
      a {
        box-shadow: inset 0.1875rem 0 0 #007bff;
        background-color: #fbfbfb;
        color: #007bff;
      }
    }

    ${props => props.active && css`
      a {
        box-shadow: inset 0.1875rem 0 0 #007bff;
        background-color: #fbfbfb;
        color: #007bff;
    `}
  }
`
