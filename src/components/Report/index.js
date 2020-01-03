import React, { useRef, useEffect, useState, memo } from 'react'
import 'tableau-api'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import { Flex } from '@rebass/grid'
import { Overlay } from 'components/Overlay'
import { ButtonDetail } from './components/ButtonDetail'
import { Container } from './components/Container'
import { Stats } from './components/Stats'
import { Mark } from './components/Mark'
import { useLazyLoad } from 'hooks/lazyload'
import { useOverlay } from 'hooks/overlay'

export const Report = withTheme(memo(({
  data,
  theme,
  active,
  withImages,
  onClick,
  onDetailPressed
}) => {
  const report = useRef(true)
  const wrapper = useRef(true)

  const [opened, setOpened] = useState(active)

  const show = useLazyLoad(wrapper)
  const [, setOverlay] = useOverlay(wrapper, false)

  useEffect(() => {
    if (data && show && !withImages) {
      const tag = report.current
      const config = {
        hideTabs: true,
        hideToolbar: true
      }

      window.viz = new window.tableau.Viz(tag, data.embedUrl, config)
    }
  }, [data, show, withImages])

  useEffect(() => {
    setOpened(active)
    !active && setOverlay(active)
  }, [active, setOverlay])

  const onOpenDetail = e => {
    e.stopPropagation()

    const open = !opened

    setOverlay(open)
    setOpened(open)

    if (onDetailPressed) {
      onDetailPressed(open ? data : null, e)
    }
  }

  return (
    <Container ref={wrapper} active={opened} onClick={onClick}>
      {!withImages && <div ref={report} />}
      {withImages && (
        <img src={data.imageUrl} alt={data.name} />
      )}
      <Overlay background={opened ? theme.content.fullscreen : null}>
        <div>
          {/* // top */}
          {/* // middle */}
          <Stats>
            <Flex justifyContent='spacee-evenly' mb={2}>
              <Flex>
                <span>10</span>
              </Flex>
              <Flex>
                <span>2</span>
              </Flex>
              <Flex>
                <span>4.8</span>
              </Flex>
            </Flex>
            {!opened && <ButtonDetail onClick={onOpenDetail} />}
          </Stats>
        </div>
      </Overlay>
      <Mark active={opened} />
    </Container>
  )
}))

Report.propTypes = {
  data: PropTypes.object.isRequired,
  withImages: PropTypes.bool,
  onDetailPressed: PropTypes.func
}

Report.defaulProps = {
  withImages: true
}
