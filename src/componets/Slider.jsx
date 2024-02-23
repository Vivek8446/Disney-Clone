/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState,useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function Slider() {
    const [movieList, setMovieList] = useState([]);

    const elementRef = useRef();


    useEffect(() => {
        getTrendingMovies();
    }, [])
    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);

        })
    }
    const sliderRight = (element)=>{
        element.scrollLeft+=screenWidth-110
    }
    const sliderLeft = (element)=>{
        element.scrollLeft-=screenWidth-110
    }
    return (
        <div>
        <IoIosArrowBack className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer" 
        onClick={()=>sliderLeft(elementRef.current)}/>
        <IoIosArrowForward className="hidden md:block text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0" 
        onClick={()=>sliderRight(elementRef.current)}/>

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth ' ref={elementRef}>
                {movieList.map((item) => (
                    <img src={IMAGE_BASE_URL + item.backdrop_path} className='min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-md  hover:border-[4px] border-gray-400 transition-all duration-100 ease-in' />
                ))}
            </div>
        </div>
    )
}

export default Slider