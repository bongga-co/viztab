import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchReports } from 'state/modules/data/reports'
import { SheetCarousel } from 'components/Carousel'

const Slider = ({ data, getReports }) => {
  useEffect(() => { data.length === 0 && getReports() }, [data, getReports])

  return (
    <>
      <SheetCarousel
        title='Slider 1'
        data={data}
      />
      <SheetCarousel
        title='Slider 2'
        data={data}
      />
      <SheetCarousel
        title='Slider 3'
        data={data}
      />
    </>
  )
}

const stateToProps = state => ({
  data: state.data.reports.data
})

const actionsToProps = dispatch => ({
  getReports: () => dispatch(fetchReports())
})

export default connect(stateToProps, actionsToProps)(Slider)
