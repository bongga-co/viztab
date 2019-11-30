import React, { useState } from 'react'
import { Flex } from '@rebass/grid'
import { Grid } from 'components/Grid'
import { Card } from 'components/Card'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { FullScreen } from 'components/FullScreen'
import { Report } from 'components/Report'
import { startPresentationMode } from 'utils/fullscreen'

const Home = () => {
  const [current, setCurrent] = useState(null)

  const data = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_SummerNewsRecap_CoreyJones/Main?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/2016_summer_news_recap_corey_jones_480x268_1.png?itok=qpHhpdJW' },
    { i: 'b', x: 1, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/AustinTeacherTurnoverstory_10_0/TeacherTurnoverinAustin?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_austin_teacher_turnover_wide.png?itok=TM4OIjWZ' },
    { i: 'c', x: 2, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/RiskofLoanDefault/Risk?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_loan_risk_anaylsis_wide.png?itok=LI60yskB' },
    { i: 'd', x: 3, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/KivaLoanStorypoints_10_0/KivaStory?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_kiva_loan_story_wide_0.png?itok=jHgtCcqx' },
    { i: 'e', x: 0, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/Tale-of-100-Entrepreneurs_10_0_0/Taleof100Entrepreneurs?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_tale_of_100_entrepreneurs_wide_2.png?itok=zpkHheOW' },
    { i: 'f', x: 1, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_SuperSampleSuperstore_RyanSleeper/SuperDescriptive?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/super_ssample_superstore_480x268.png?itok=A2MHRPaB' },
    { i: 'g', x: 2, y: 2, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95' },
    { i: 'h', x: 3, y: 2, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95' },
    { i: 'i', x: 0, y: 2, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95' }
  ]

  const onClickImage = item => {
    setCurrent(item)
    startPresentationMode()
  }

  return (
    <>
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
          <Card key={item.i}>
            <img src={item.posterUrl} alt='' />
            <Flex justifyContent='flex-end' py={2}>
              <Button onClick={() => onClickImage(item)}>
                <Text textcolor='white'>Detalle</Text>
              </Button>
            </Flex>
          </Card>
        ))}
      </Grid>
      <FullScreen show={current !== null} onExit={() => setCurrent(null)}>
        <Report data={current} />
      </FullScreen>
    </>
  )
}

export default Home
