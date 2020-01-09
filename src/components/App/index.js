import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'
import configureStore, { history } from 'state/store'
import { SidebarLayout } from 'layouts'
import { Routes } from 'routes'
import THEME from 'theme'

const store = configureStore()

export const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={THEME.light}>
          <SidebarLayout>
            <Routes />
          </SidebarLayout>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  )
}
