import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

// pages
const Home = lazy(() => import('pages/Home'))
const Video = lazy(() => import('pages/Video'))
const Slider = lazy(() => import('pages/Slider'))
const Upload = lazy(() => import('pages/Upload'))

export const Routes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/video' component={Video} />
        <Route path='/slider' component={Slider} />
        <Route path='/upload' component={Upload} />
      </Switch>
    </Suspense>
  )
}
