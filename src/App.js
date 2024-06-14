import React from 'react'
import NavBar from './component/NavBar'
import Trending from './component/Trending'
import TrendingTv from './component/TrendingTv'
import TrendingP from './component/TrendingP'
import Home from './component/Home'
import Footer from './component/Footer'
import Details from './component/Details'
import DetailsTv from './DetailsTv'
import DetailsP from './component/DetailsP'
import {Route ,Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className='bg-dark'>
      
<NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Trending' element={<Trending/>}></Route>
        <Route path='/Trending/:movieid'element={<Details/>}></Route>
        <Route path='/TrendingTv' element={<TrendingTv/>}></Route>
        <Route path='/TrendingTv/:tvid'element={<DetailsTv/>}></Route>
        <Route path='/TrendingP' element={<TrendingP/>}></Route>
        <Route path='/TrendingP/:Pid'element={<DetailsP/>}></Route>
        
      </Routes>
      
      <Footer/>
    
    </div>
   
  )
}