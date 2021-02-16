const SET_FULLSCREEN_MODE = 'SET_FULLSCREEN_MODE'

const initialState = {
  fullscreen: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_FULLSCREEN_MODE:
      return {
        ...state,
        fullscreen: !state.fullscreen
      }
    default:
      return state
  }
}

export const setFullScreenMode = () => {
  return { type: SET_FULLSCREEN_MODE }
}
