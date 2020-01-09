// action types
const REQUEST_REPORTS = 'REQUEST_REPORTS'
const RECEIVE_REPORTS = 'RECEIVE_REPORTS'
const SET_REPORT_DETAIL = 'SET_REPORT_DETAIL'

// initial state
const initialState = {
  loading: false,
  layouts: {
    lg: [],
    md: [],
    sm: [],
    xs: [],
    xxs: []
  },
  data: [],
  detail: null,
  current: null,
  position: null
}

/**
 * reports reducer
 * @param {object} state
 * @param {object} action
 * @return {object}
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQUEST_REPORTS:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_REPORTS:
      return {
        ...state,
        loading: false,
        layouts: action.layouts,
        data: action.data
      }
    case SET_REPORT_DETAIL:
      return {
        ...state,
        detail: action.detail,
        current: action.current,
        position: action.position
      }
    default:
      return state
  }
}

/**
 * action creator to request reports
 * @return {object}
 */
function requestReports () {
  return { type: REQUEST_REPORTS }
}

/**
 * action creator to set the reports data
 * @param {Array} data
 * @returns {object}
 */
function receiveReports (data) {
  const layData = data.map(item => {
    return {
      i: item.id_objeto,
      h: item.alto,
      w: item.ancho,
      x: item.y,
      y: item.x,
      maxW: 4
    }
  })

  const layouts = {
    lg: layData || [],
    md: layData || [],
    sm: layData || [],
    xs: layData || [],
    xxs: layData || []
  }

  return { type: RECEIVE_REPORTS, layouts, data }
}

/**
 * action creator to get the reports
 * @returns {Promise}
 */
export function fetchReports () {
  return async dispatch => {
    dispatch(requestReports())

    const data = [
      { i: 'a', x: 0, y: 0, w: 1, h: 1, id: 0, embedUrl: 'https://public.tableau.com/views/VGContest_SummerNewsRecap_CoreyJones/Main?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', imageUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/2016_summer_news_recap_corey_jones_480x268_1.png?itok=qpHhpdJW', time: 30000 },
      { i: 'b', x: 1, y: 0, w: 1, h: 1, id: 1, embedUrl: 'https://public.tableau.com/views/AustinTeacherTurnoverstory_10_0/TeacherTurnoverinAustin?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', imageUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_austin_teacher_turnover_wide.png?itok=TM4OIjWZ', time: 50000 },
      { i: 'c', x: 2, y: 0, w: 1, h: 1, id: 2, embedUrl: 'https://public.tableau.com/views/RiskofLoanDefault/Risk?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', imageUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_loan_risk_anaylsis_wide.png?itok=LI60yskB', time: 35000 },
      { i: 'd', x: 3, y: 0, w: 1, h: 1, id: 3, embedUrl: 'https://public.tableau.com/views/KivaLoanStorypoints_10_0/KivaStory?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', imageUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_kiva_loan_story_wide_0.png?itok=jHgtCcqx', time: 10000 },
      { i: 'e', x: 0, y: 1, w: 1, h: 1, id: 4, embedUrl: 'https://public.tableau.com/views/Tale-of-100-Entrepreneurs_10_0_0/Taleof100Entrepreneurs?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', imageUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_tale_of_100_entrepreneurs_wide_2.png?itok=zpkHheOW', time: 25000 },
      { i: 'f', x: 1, y: 1, w: 1, h: 1, id: 5, embedUrl: 'https://public.tableau.com/views/VGContest_SuperSampleSuperstore_RyanSleeper/SuperDescriptive?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', imageUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/super_ssample_superstore_480x268.png?itok=A2MHRPaB', time: 25000 },
      { i: 'g', x: 2, y: 1, w: 1, h: 1, id: 6, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', imageUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95', time: 15000 },
      { i: 'h', x: 3, y: 1, w: 1, h: 1, id: 7, embedUrl: 'https://public.tableau.com/views/Dashboard-Publico-Educatic/Obesity?:display_count=y&:origin=viz_share_link', imageUrl: 'https://public.tableau.com/static/images/Da/Dashboard-Publico-Educatic/Obesity/4_3.png', time: 47000 },
      { i: 'i', x: 0, y: 2, w: 1, h: 1, id: 8, embedUrl: 'https://public.tableau.com/views/SiempreCRM/SIEMPRECRM?:display_count=y&:origin=viz_share_link', imageUrl: 'https://public.tableau.com/static/images/Si/SiempreCRM/SIEMPRECRM/4_3.png', time: 20000 },
      { i: 'j', x: 1, y: 2, w: 1, h: 1, id: 9, embedUrl: 'https://public.tableau.com/views/books_brown/Books?:display_count=n&:origin=viz_share_link', imageUrl: 'https://public.tableau.com/s/sites/default/files/media/juditbooks.jpg', time: 25000 },
      { i: 'k', x: 2, y: 2, w: 1, h: 1, id: 10, embedUrl: 'https://public.tableau.com/views/NBAPlayerMovement/nba?:display_count=n&:origin=viz_share_link', imageUrl: 'https://public.tableau.com/s/sites/default/files/media/nbaplayermovement.jpg', time: 15000 },
      { i: 'l', x: 3, y: 2, w: 1, h: 1, id: 11, embedUrl: 'https://public.tableau.com/views/books_brown/Books?:display_count=n&:origin=viz_share_link', imageUrl: 'https://public.tableau.com/s/sites/default/files/media/juditbooks.jpg', time: 25000 }
    ]

    dispatch(receiveReports(data))
  }
}

/**
 * action creator to set the technical sheet data
 * @returns {object}
 */
export function setReportDetail (detail = null, current = null, position = null) {
  return { type: SET_REPORT_DETAIL, detail, current, position }
}
