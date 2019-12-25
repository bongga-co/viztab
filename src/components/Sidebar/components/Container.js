import styled from 'styled-components'

export default styled.aside`
  position: fixed;
  top: 0;
  z-index: 1070;
  width: ${props => props.theme.sidebar.width};
  height: 100vh;
  background: ${props => props.theme.sidebar.background};
  box-shadow: 0 0.125rem 9.375rem rgba(90,97,105,.1), 
              0 0.25rem 0.5rem rgba(90,97,105,.12), 
              0 0.9375rem 1.375rem rgba(90,97,105,.1), 
              0 0.4375rem 2.1875rem rgba(165,182,201,.1);
  overflow-y: auto;
  overflow-x: hidden;
  will-change: transform;
  transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;

  @media only screen and (max-width: ${props => props.theme.breakpoints[1]}) {
    left: -${props => props.theme.sidebar.width};
  }
`
