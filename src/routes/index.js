import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
const Home = lazy(() => import('pages/Home'))

export const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Suspense>
  )
}
