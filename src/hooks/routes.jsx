import { NowPlaying, Popular, TopRated, Upcoming } from "../pages"
import { PATH } from "./path"
import React from "react"

export const navbarMenuList = [
  {
    id: 1,
    path: PATH.nowPlaying,
    value: "Now Playing",
  },
  {
    id: 2,
    path: PATH.popular,
    value: "Popular",
  },
  {
    id: 3,
    path: PATH.topRated,
    value: "Top Rated",
  },
  {
    id: 4,
    path: PATH.upComing,
    value: "Upcoming",
  },
]

export const pageRoutes = [
  {
    id: 1,
    path: PATH.nowPlaying,
    element: <NowPlaying />,
  },
  {
    id: 2,
    path: PATH.popular,
    element: <Popular />,
  },
  {
    id: 3,
    path: PATH.topRated,
    element: <TopRated />,
  },
  {
    id: 4,
    path: PATH.upComing,
    element: <Upcoming />,
  },
]

