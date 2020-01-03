import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReports, setReportDetail } from 'state/modules/data/reports'
import { SheetGrid } from 'components/Grid'

const Home = ({ data, position, getReports, setReportDetail }) => {
  useEffect(() => { data.length === 0 && getReports() }, [data, getReports])

  return (
    <>
      <SheetGrid
        data={data}
        position={position}
        onDetail={(item, e) => {
          e.stopPropagation()
          setReportDetail(null, null, e.target.getBoundingClientRect())
        }}
        onClose={e => setReportDetail()}
      />
    </>
  )
}

const stateToProps = state => ({
  data: state.data.reports.data,
  position: state.data.reports.position
})

const actionsToProps = dispatch => ({
  getReports: () => dispatch(fetchReports()),
  setReportDetail: (open, data, position) => dispatch(setReportDetail(open, data, position))
})

export default connect(stateToProps, actionsToProps)(Home)
