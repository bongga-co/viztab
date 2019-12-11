import React, { useState, useEffect } from 'react'
import { Flex } from '@rebass/grid'

import { connect } from 'react-redux'
import { fetchReports } from 'state/modules/data/reports'
import { startPresentationMode } from 'utils/fullscreen'

import { Grid } from 'components/Grid'
import { Card } from 'components/Card'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { FullScreen } from 'components/FullScreen'
import { Carousel } from 'components/Carousel'
import { Report } from 'components/Report'
import { PresentationButton } from './components/PresentationButton'

const Home = ({ data, getReports }) => {
  const [fullMode, setFullMode] = useState(false)
  const [current, setCurrent] = useState(null)

  const onClickImage = item => {
    setCurrent(item)
    setFullMode(true)
    startPresentationMode()
  }

  const onStartPresentationMode = () => {
    setFullMode(true)
    startPresentationMode()
  }

  const onExitFullMode = () => {
    setCurrent(null)
    setFullMode(false)
  }

  useEffect(() => { getReports() }, [getReports])

  return (
    <>
      <Flex justifyContent='flex-end'>
        <PresentationButton onClick={onStartPresentationMode} />
      </Flex>
      <Grid
        className='layout'
        margin={[50, 80]}
        layouts={{ lg: data }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 4, md: 4, sm: 2, xs: 2, xxs: 1 }}
        responsive
        isResizable
        isDraggable
      >
        {data.map(item => (
          <Card key={item.i} cover='contain'>
            <img src={item.posterUrl} alt='' />
            <Flex justifyContent='flex-end' py={2}>
              <Button onClick={() => onClickImage(item)}>
                <Text textcolor='white'>Detalle</Text>
              </Button>
            </Flex>
          </Card>
        ))}
      </Grid>
      <FullScreen show={fullMode} onExit={onExitFullMode}>
        {current !== null && <Report data={current} single />}
        {current === null && <Carousel data={data} />}
      </FullScreen>
    </>
  )
}

const stateToProps = state => ({
  data: state.data.reports.data
})

const actionsToProps = dispatch => ({
  getReports: () => dispatch(fetchReports())
})

export default connect(stateToProps, actionsToProps)(Home)
