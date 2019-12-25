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
    const e = tag || (status ? document.documentElement : document)

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
      if (e.cancelFullScreen) {
        e.cancelFullScreen()
      } else if (e.exitFullscreen) {
        e.exitFullscreen()
      } else if (e.mozCancelFullScreen) {
        e.mozCancelFullScreen()
      } else if (e.webkitCancelFullScreen) {
        e.webkitCancelFullScreen()
      } else if (e.msExitFullscreen) {
        e.msExitFullscreen()
      }
    }
  }

  return [active, setFullscreenStatus]
}
