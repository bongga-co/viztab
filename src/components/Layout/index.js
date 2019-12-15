import React from 'react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
import { Content } from 'components/Content'
import { Sidebar } from 'components/Sidebar'

export const Layout = ({ children }) => (
  <>
    <Header />
    <Sidebar />
    <Content>{children}</Content>
    <Footer />
  </>
)
