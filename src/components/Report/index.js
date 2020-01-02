import React, { useRef, useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import 'tableau-api'
import Container from './components/Container'

export const Report = memo(({ single, data, onClick }) => {
  const [show, setShow] = useState(false)
  const [interactive, setInteractive] = useState(false)

  const reportRef = useRef(null)
  const articleRef = useRef(null)

  useEffect(() => {
    if (show && data) {
      const tag = reportRef.current
      const config = {
        hideTabs: true,
        hideToolbar: true
      }

      window.viz = new window.tableau.Viz(tag, data.embedUrl, config)
    }
  }, [data, show])

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting && articleRef.current) {
          setShow(true)
          observer.disconnect()
        }
      })

      articleRef.current && observer.observe(articleRef.current)
    })
  }, [articleRef])

  return (
    <Container
      ref={articleRef}
      single={single}
      interactive={single || interactive}
      onClick={() => {
        if (!single) {
          setInteractive(!interactive)
          onClick && onClick(data)
        }
      }}
    >
      {show && <div ref={reportRef} />}
    </Container>
  )
})

Report.propTypes = {
  data: PropTypes.shape({
    embedUrl: PropTypes.string
  }),
  single: PropTypes.bool,
  onClick: PropTypes.func
}
