import React from 'react'

const MoviePage = ({URL}) => {
    const nowPlayingData = getRequest(`/now_playing?language=en-US&page=1&key=${KEY}`)

  return (
    <div>MoviePage</div>
  )
}

export default MoviePage