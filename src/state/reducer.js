import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import data from 'state/modules/data'

export default (history) => combineReducers({
  router: connectRouter(history),
  data
})
