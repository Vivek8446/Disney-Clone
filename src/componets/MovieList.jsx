/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import HrMovieCard from './HrMovieCard';


function MovieList({ genreId,index_ }) {
    const elementRef=useRef(null);
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getMovieByGenreId();
    }, [])
    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        })

    }
    const slideLeft = (element)=>{
        element.scrollLeft-=500;
    }
    const slideRight = (element)=>{
        element.scrollLeft+=500;
    }
    return (
        <div className='relative'>
        <IoIosArrowBack onClick={()=>slideLeft(elementRef.current)}
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${index_%3==0?'mt-[80px]':'mt-[150px]'} `}
        />
            <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide pt-5 px-3 pb-5 scroll-smooth '>
                {movieList.map((item, index) => (
                    <>
                   {index_%3==0?<HrMovieCard movie={item}/>: <MovieCard movie={item} />}
                    </>
                    
                ))}
            </div>
            <IoIosArrowForward onClick={()=>slideRight(elementRef.current)}
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute right-0 top-0 ${index_%3==0?'mt-[80px]':'mt-[150px]'}`}
        />
        </div>


    )
}

export default MovieList