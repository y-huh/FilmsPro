import { getRequest } from "../service/getRequest"
import { KEY } from "../hooks/getEnv"
import React from "react"
const NowPlaying = () => {
  const nowPlayingData = getRequest(`/now_playing?language=en-US&page=1&key=${KEY}`)

  return (
    <div>
      {nowPlayingData?.results?.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  )
}

export default NowPlaying

