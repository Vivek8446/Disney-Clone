/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import GenresList from '../Costant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
    return (
        <div>
            {GenresList.genere.map((item,index)=>index<=4&&(
                <div className='p-8 px-8 md:px-16'>
                    <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
                    <MovieList genreId={item.id} index_={index}/>
                </div>
            ))}
        </div>
    )
}

export default GenreMovieList