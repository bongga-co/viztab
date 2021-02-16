import { useEffect, useState } from 'react'

/**
 * custom hook to add lazy load to components by its ref
 * @param {HTMLElement} ref
 * @returns {boolean}
 */
export const useLazyLoad = (ref) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]

        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
      })

      ref.current && observer.observe(ref.current)
    })
  }, [ref])

  return show
}
