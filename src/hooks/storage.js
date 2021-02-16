import { useState } from 'react'

/**
 * custom hook to get from local storage or save to it
 * @param {string} key
 * @param {string} defaultValue
 * @returns {Array}
 */
export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? item : defaultValue
    } catch (e) {
      return defaultValue
    }
  })

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setValue(value)
    } catch (e) {}
  }

  return [value, setLocalStorage]
}
