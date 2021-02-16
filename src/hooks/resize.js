import { useState, useEffect } from 'react'

/**
 * custom hook to listen window resize event
 * @returns {object}
 */
export const useResize = () => {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = e => {
    setScreen({ width: e.target.innerWidth, height: e.target.innerHeight })
  }

  return screen
}
