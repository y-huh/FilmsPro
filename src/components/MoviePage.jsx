import React, { useState } from 'react'
import { getRequest } from '../service/getRequest'
import { KEY } from '../hooks/getEnv'
import MovieCard from './MovieCard'
import { Pagination } from '@mui/material'

const MoviePage = ({URL}) => {
  const [page,setPage] = useState(1)

  const data = getRequest(`${URL}?language=en-US&page=${page}&key=${KEY}`, page);
  console.log(data);




  return (
    <div className='mx-auto flex flex-col justify-center items-center gap-10 mb-10'>
    <div className='flex flex-wrap gap-5 px-10 justify-center mt-8'>
      {data?.results?.map((item,index) => <MovieCard key={index} item={item}/>)}

    </div>
    <Pagination onChange={(a,b) => setPage(b)} count={data?.total_pages} color="primary" />
    </div>

  )
}

export default MoviePage