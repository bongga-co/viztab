import React, { useRef, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Grid } from 'components/Grid'
import { Card } from 'components/Card'
import { Layout } from 'components/Layout'
import { FullScreen } from 'components/FullScreen'
import { Report } from 'components/Report'
import THEME from 'theme'
import { startPresentationMode } from 'utils/fullscreen'

const App = () => {
  const [current, setCurrent] = useState(null)

  const cardRef = useRef(null)
  const data = [
    { i: 'a', x: 0, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_SummerNewsRecap_CoreyJones/Main?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/2016_summer_news_recap_corey_jones_480x268_1.png?itok=qpHhpdJW' },
    { i: 'b', x: 1, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/AustinTeacherTurnoverstory_10_0/TeacherTurnoverinAustin?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_austin_teacher_turnover_wide.png?itok=TM4OIjWZ' },
    { i: 'c', x: 2, y: 0, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/RiskofLoanDefault/Risk?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_loan_risk_anaylsis_wide.png?itok=LI60yskB' },
    { i: 'd', x: 0, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/KivaLoanStorypoints_10_0/KivaStory?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_kiva_loan_story_wide_0.png?itok=jHgtCcqx' },
    { i: 'e', x: 1, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/Tale-of-100-Entrepreneurs_10_0_0/Taleof100Entrepreneurs?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/vg_tale_of_100_entrepreneurs_wide_2.png?itok=zpkHheOW' },
    { i: 'f', x: 2, y: 1, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_SuperSampleSuperstore_RyanSleeper/SuperDescriptive?:embed=y&:loadOrderID=0&:display_count=y&:origin=viz_share_link', posterUrl: 'https://cdns.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/super_ssample_superstore_480x268.png?itok=A2MHRPaB' },
    // { i: 'g', x: 0, y: 2, w: 1, h: 1, embedUrl: 'https://public.tableau.com/views/VGContest_AAPLTicker_YuriFal/AAPL?:embed=y&:loadOrderID=0&:display_count=y&publish=yes&:origin=viz_share_link', posterUrl: 'https://cdnl.tblsft.com/sites/default/files/styles/viz_gallery_thumb/public/visualizations/pediatrics_overview_bridget_cogley_480x268.png?itok=qi-ilh95' },
  ]

  return (
    <ThemeProvider theme={THEME['dark']}>
      <Layout>
        <Grid
          className='layout'
          layout={data}
          width={window.innerWidth - 128}
          rowHeight={200}
          margin={[50, 50]}
          cols={3}
          isResizable={false}
          isDraggable={false}
        >
          {data.map(item => (
            <Card
              ref={cardRef}
              key={item.i}
              onClick={() => {
                setCurrent(item)
                startPresentationMode()
              }}
            >
              <img src={item.posterUrl} alt='' />
            </Card>
          ))}
        </Grid>
      </Layout>
      <FullScreen show={current !== null} onExit={() => setCurrent(null)}>
        <Report data={current} />
      </FullScreen>
    </ThemeProvider>
  )
}

export default App
