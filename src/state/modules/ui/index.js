import { combineReducers } from 'redux'
import fullscreen from 'state/modules/ui/fullscreen'
import sidebar from 'state/modules/ui/sidebar'

export default combineReducers({
  fullscreen,
  sidebar
})
