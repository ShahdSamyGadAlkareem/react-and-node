import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const{movieid}=useParams()
    const[details,setdetails] =useState([])
    const getdetails=async()=>{
        const Response= await axios.get(`https://api.themoviedb.org/3/movie/${movieid}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
   setdetails(Response.data)
    }
    useEffect(()=>{
        getdetails() },[movieid])

  return (
   

<div className='container'>
    <div className='row justify-content-center'>
        <img src={"https://image.tmdb.org/t/p/w500" + (details && details.poster_path)} alt='...' className='col-5'/>
        <div className='col text-white '>
            <br />
         <h4>{details.title}</h4>
         <br></br>
         <h5>popularity:{details.popularity}</h5>
         <h5>release date:{details.release_date}</h5>
        
        
    </div>
    
</div>
</div>





  )
}
