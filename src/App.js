import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'
import configureStore, { history } from 'state/store'
import { Layout } from 'components/Layout'
import { Routes } from 'routes'
import THEME from 'theme'

const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={THEME.dark}>
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
