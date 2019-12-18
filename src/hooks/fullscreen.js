import { useState, useEffect } from 'react'

/**
 * custom hook to listen window fullscreen event
 * @returns {Array}
 */
export const useFullscreen = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreen)
    document.addEventListener('webkitfullscreenchange', handleFullscreen)
    document.addEventListener('msfullscreenchange', handleFullscreen)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreen)
      document.removeEventListener('webkitfullscreenchange', handleFullscreen)
      document.removeEventListener('msfullscreenchange', handleFullscreen)
    }
  })

  const handleFullscreen = e => {
    if (document.fullscreenElement) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  const setFullscreenStatus = (tag, status) => {
    const e = tag || document.documentElement

    if (status) {
      if (e.requestFullscreen) {
        e.requestFullscreen()
      } else if (e.mozRequestFullScreen) {
        e.mozRequestFullScreen()
      } else if (e.webkitRequestFullScreen) {
        e.webkitRequestFullScreen()
      } else if (e.msRequestFullscreen) {
        e.msRequestFullscreen()
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  return [active, setFullscreenStatus]
}
