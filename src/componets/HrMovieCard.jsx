/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


function HrMovieCard({movie}) {
  return (
    <div className='hover:scale-110 transitoin-all duration-150 ease-in'>
        <img src={IMAGE_BASE_URL+ movie.backdrop_path} className='w-[110px] md:w-[260px] rounded-lg hover:border-[3px] border-gray-400  cursor-pointer'  />
        <h2 className='w-[110px] md:w-[260px] mt-2'>{movie.title}</h2>
    </div>
  )
}

export default HrMovieCard