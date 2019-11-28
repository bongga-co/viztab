import React, { useRef, useEffect, useState, memo } from 'react'
import PropTypes from 'prop-types'
import tableau from 'tableau-api'
import Container from './components/Container'

export const Report = memo(({ data }) => {
  const [show, setShow] = useState(false)

  const reportRef = useRef(null)
  const articleRef = useRef(null)

  useEffect(() => {
    if (show && data) {
      const viz = new window.tableau.Viz(reportRef.current, data.embedUrl)
      console.log(viz)
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

      observer.observe(articleRef.current)
    })
  }, [articleRef])

  return (
    <Container ref={articleRef}>
      {show && <div ref={reportRef} />}
    </Container>
  )
})

Report.propTypes = {
  data: PropTypes.shape({
    embedUrl: PropTypes.string
  })
}
