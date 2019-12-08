import React from 'react'
import PropTypes from 'prop-types'
import { isIncluded } from 'utils/strings'
import { isYoutubeUrl, getYTVideoId } from 'utils/video'

const didPrepareUrl = props => {
  const { src, autoplay } = props

  const auto = Number(autoplay)
  let url = src || ''
  let videoId

  if (isYoutubeUrl(url)) {
    videoId = getYTVideoId(url)
    url = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=${auto}&version=3rel=0`
  } else if (isIncluded(url, 'embed')) {
    if (!isIncluded(url, 'autoplay')) {
      url = `${url}&autoplay=${auto}&rel=0`
    }
  }

  return url
}

export const Embed = (props) => {
  const { width, height, src, fullscreen, autoplay, ...rest } = props
  const url = didPrepareUrl(props)

  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={url}
        frameBorder='0'
        allowFullScreen={fullscreen}
        allow='autoplay'
        title={'frame-' + Math.random()}
        {...rest}
      />
    </div>
  )
}

Embed.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  src: PropTypes.string,
  fullscreen: PropTypes.bool,
  origin: PropTypes.string,
  autoplay: PropTypes.bool
}

Embed.defaultProps = {
  width: '100%',
  height: '450px',
  fullscreen: true,
  autoplay: true
}
