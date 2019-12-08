import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
const Home = lazy(() => import('pages/Home'))
const Video = lazy(() => import('pages/Video'))

export const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/video' component={Video} />
      </Switch>
    </Suspense>
  )
}
