import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import reducer from 'state/reducer'
import { APP_NAME } from 'globals/constants'

export const history = createBrowserHistory()

/**
 * store donde se almacenan los datos globales de la aplicación.
 * @param {object} initialState
 */
export default function configureStore (initialState) {
  const env = process.env.NODE_ENV
  const middlewares = applyMiddleware(routerMiddleware(history), thunk)
  const middleware = compose(middlewares)
  const devTool = composeWithDevTools({ name: APP_NAME })
  const enhancer = env !== 'production' ? devTool(middleware) : middleware

  const store = createStore(reducer(history), initialState, enhancer)

  return store
}
