import React from 'react'
import { render } from 'react-dom'
import { App } from 'components/App'
import { GlobalStyles } from 'components/GlobalStyles'
import * as serviceWorker from './serviceWorker'

const tag = document.getElementById('root')
const app = (
  <>
    <GlobalStyles />
    <App />
  </>
)

render(app, tag)
serviceWorker.unregister()
