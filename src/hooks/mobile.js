import { useState, useEffect } from 'react'

/**
 * custom hook to listen match media event
 * @param  {string} size breakpoint
 * @return {boolean}
 */
export const useMobile = (size = '62em') => {
  const query = window.matchMedia(`(max-width: ${size})`)
  const [mobile, setMobile] = useState(query.matches)

  useEffect(() => {
    query.addListener(onQueryChanged)
    return () => {
      query.removeListener(onQueryChanged)
    }
  })

  const onQueryChanged = e => setMobile(e.matches)

  return mobile
}
