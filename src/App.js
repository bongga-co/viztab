import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'components/Layout'
import { Routes } from 'routes'
import THEME from 'theme'

const App = () => {
  return (
    <ThemeProvider theme={THEME.dark}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
