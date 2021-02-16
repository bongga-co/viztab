import React from 'react'
import { Box } from '@rebass/grid'
import { Embed } from 'components/Embed'
import { Tabs } from 'components/Tabs'

export default () => {
  return (
    <>
      <Tabs>
        <div label='Gator'>
          <Box py={5}>
            <Embed src='https://www.youtube.com/watch?v=-UPqx7yDuSc' />
          </Box>
        </div>
        <div label='Croc'>
          <Box py={5}>
            <Embed src='https://www.youtube.com/watch?v=ULEFrRSPXFE' />
          </Box>
        </div>
        <div label='Sarcosuchus'>
          <Box py={5}>
            <Embed src='https://www.youtube.com/watch?v=wWH66F9y63U' />
          </Box>
        </div>
      </Tabs>
    </>
  )
}
