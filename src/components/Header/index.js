import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from 'components/Logo'
import Container from './components/Container'

export const Header = () => {
  return (
    <Container>
      <Link to='/'>
        <Logo />
      </Link>
    </Container>
  )
}
