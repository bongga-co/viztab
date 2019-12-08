// action types
const REQUEST_REPORTS = 'REQUEST_REPORTS'
const RECEIVE_REPORTS = 'RECEIVE_REPORTS'

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
  data: []
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
      { i: 'i', x: 0, y: 0, w: 2, h: 2, id: 1, embedUrl: 'https://public.tableau.com/views/SiempreCRM/SIEMPRECRM?:display_count=y&:origin=viz_share_link', posterUrl: 'https://public.tableau.com/static/images/Si/SiempreCRM/SIEMPRECRM/4_3.png' },
      { i: 'a', x: 1, y: 0, w: 1, h: 1, id: 2, embedUrl: 'https://public.tableau.com/views/VGContest_SummerNewsRecap_CoreyJones/Main?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/2016_summer_news_recap_corey_jones_480x268_1.png?itok=qpHhpdJW' },
      { i: 'b', x: 2, y: 0, w: 1, h: 1, id: 3, embedUrl: 'https://public.tableau.com/views/AustinTeacherTurnoverstory_10_0/TeacherTurnoverinAustin?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_austin_teacher_turnover_wide.png?itok=TM4OIjWZ' },
      { i: 'c', x: 3, y: 0, w: 1, h: 1, id: 4, embedUrl: 'https://public.tableau.com/views/RiskofLoanDefault/Risk?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_loan_risk_anaylsis_wide.png?itok=LI60yskB' },
      { i: 'd', x: 0, y: 1, w: 1, h: 1, id: 5, embedUrl: 'https://public.tableau.com/views/KivaLoanStorypoints_10_0/KivaStory?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_kiva_loan_story_wide_0.png?itok=jHgtCcqx' },
      { i: 'f', x: 2, y: 1, w: 1, h: 1, id: 6, embedUrl: 'https://public.tableau.com/views/VGContest_SuperSampleSuperstore_RyanSleeper/SuperDescriptive?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/super_ssample_superstore_480x268.png?itok=A2MHRPaB' },
      { i: 'g', x: 3, y: 1, w: 1, h: 1, id: 7, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95' },
      { i: 'h', x: 2, y: 2, w: 1, h: 1, id: 8, embedUrl: 'https://public.tableau.com/views/Dashboard-Publico-Educatic/Obesity?:display_count=y&:origin=viz_share_link', posterUrl: 'https://public.tableau.com/static/images/Da/Dashboard-Publico-Educatic/Obesity/4_3.png' },
      { i: 'e', x: 3, y: 2, w: 1, h: 1, id: 9, embedUrl: 'https://public.tableau.com/views/Tale-of-100-Entrepreneurs_10_0_0/Taleof100Entrepreneurs?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_tale_of_100_entrepreneurs_wide_2.png?itok=zpkHheOW' }
    ]

    setTimeout(() => dispatch(receiveReports(data)), 1000)
  }
}
