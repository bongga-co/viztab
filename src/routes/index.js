import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { LazyRoute } from './components/LazyRoute'

// pages
const Home = lazy(() => import('../pages/Home'))

export const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/'
        render={() => (
          <LazyRoute>
            <Home />
          </LazyRoute>
        )}
      />
    </Switch>
  )
}
