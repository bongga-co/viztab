import { isIncluded } from 'utils/strings'

/* YOUTUBE */
export function getYTThumbs (id, url = null, number = 0) {
  let _id = id

  if (url) {
    _id = getYTVideoId(url)
  }

  return `https://img.youtube.com/vi/${_id}/${number}.jpg`
}

export const isYoutubeUrl = url => isIncluded(url, 'youtube.com/watch')

export function getYTVideoId (url) {
  let videoId = null
  if (isIncluded(url, 'watch')) {
    videoId = url.split('=')[1]
  }
  return videoId
}
