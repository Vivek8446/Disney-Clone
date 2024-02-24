// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import Header from "./componets/Header"
import './App.css'
import Slider from './componets/Slider'
import ProductionHouse from './componets/ProductionHouse'
import GenreMovieList from './componets/GenreMovieList'
import Footer from './componets/Footer'

function App() {
  
  return (
    <div className=' text-white '>
      <Header/>

      <Slider/>

      <ProductionHouse/>

      <GenreMovieList/>

      <Footer/>
    </div> 
  )
}

export default App
