const SET_SIDEBAR_OPEN = 'SET_SIDEBAR_OPEN'
const REQUEST_SIDEBAR_DATA = 'REQUEST_SIDEBAR_DATA'
const RECEIVE_SIDEBAR_DATA = 'RECEIVE_SIDEBAR_DATA'

const initialState = {
  open: false,
  data: [],
  loading: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SIDEBAR_OPEN:
      return {
        ...state,
        open: !state.open
      }
    case REQUEST_SIDEBAR_DATA:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_SIDEBAR_DATA:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    default:
      return state
  }
}

export const setSidebarOpen = () => {
  return { type: SET_SIDEBAR_OPEN }
}

const requestSidebarData = () => {
  return { type: REQUEST_SIDEBAR_DATA }
}

const receiveSidebarData = (data) => {
  return { type: RECEIVE_SIDEBAR_DATA, data }
}

export const fetchSidebarData = () => {
  return dispatch => {
    dispatch(requestSidebarData())

    const data = [
      { id: 1, name: 'Home', to: '/', icon: 'https://image.flaticon.com/icons/png/128/25/25694.png' },
      { id: 2, name: 'Video', to: '/video', icon: 'https://www.materialui.co/materialIcons/av/slow_motion_video_black_192x192.png', active: 'current' },
      { id: 3, name: 'Slider', to: '/slider', icon: 'https://www.materialui.co/materialIcons/av/slow_motion_video_black_192x192.png', active: 'current' }
    ]
    setTimeout(() => dispatch(receiveSidebarData(data)), 500)
  }
}
