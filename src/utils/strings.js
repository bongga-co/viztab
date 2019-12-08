export function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function isIncluded (source, substring) {
  let result = false

  if (String.prototype.includes) {
    result = source.includes(substring)
  } else {
    result = source.indexOf(substring) !== -1
  }

  return result
}
