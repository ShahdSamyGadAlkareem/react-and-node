import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function DetailsTv() {
  const{tvid}=useParams()
    const[details,setdetails] =useState([])
    const getdetails=async()=>{
        const Response= await axios.get(`https://api.themoviedb.org/3/tv/${tvid}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A`)
   setdetails(Response.data)
    }
    useEffect(()=>{
        getdetails() },[tvid])

  return (
   

<div className='container'>
    <div className='row justify-content-center'>
        <img src={"https://image.tmdb.org/t/p/w500" + (details && details.poster_path)} alt='...' className='col-4'/>
         <div className='col text-white '>
            <br/>
         <h4>{details.name}</h4>
         <br/>
         <h5>popularity:{details.popularity}</h5>
        
         <h5>release date:{details.first_air_date}</h5>
        
    </div>
    </div>
</div>


  
  )
}