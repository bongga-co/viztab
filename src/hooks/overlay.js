import { useState, useEffect } from 'react'

export const useOverlay = (ref, status = false) => {
  const [active, setActive] = useState(status)

  useEffect(() => {
    const tags = document.querySelectorAll('.__overlay')

    if (active) {
      tags.forEach(tag => {
        tag.parentNode.style.transform = 'scale(1.0)'
        tag.parentNode.style.cursor = 'default'
        tag.style.opacity = 0
        tag.parentNode.parentNode.style.zIndex = 0

        if (ref.current === tag.parentNode) {
          tag.style.opacity = 1
          tag.parentNode.parentNode.style.zIndex = 6
        }
      })
    } else {
      tags.forEach(tag => {
        tag.style.opacity = null
        tag.parentNode.style.transform = null
        tag.parentNode.style.cursor = null
        tag.parentNode.parentNode.style.zIndex = null
      })
    }
  }, [active, ref])

  const didActiveOverlay = (shouldActive) => setActive(shouldActive)
  return [active, didActiveOverlay]
}
