import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
export default function TrendingTv() {
    const [movies, setMovies] = useState([])
    const getMovies = async () =>{
        const Response = await axios.get("https://api.themoviedb.org/3/trending/tv/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR2kArrFYlDYF7UV-44Zl3L5UI9sH1UgIXv9N4SrIzcIZb070ZVCbCgfR7A")
        setMovies(Response.data.results)
    }
    useEffect( () =>{
        getMovies()
    }, [])
    console.log(movies)
    return(
        <section className='container-fluid bg-dark'>
            
            <div className="row">
                <div className="col-4 d-flex justify-content-center align-items-center " ><h1 className='text-info text-center fw-light'>Trending<br/> TV Shows <br/>To Watch Now</h1></div>
            {
            movies && movies.map( (item) => {
                return(
                    <div className='p-2 col-md-2 align-items-end '>
                        <Link to={"/TrendingTv/"+item.id}>
                            <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} className='w-100' alt="" />
                           more details </Link>
                            <h5 className='text-info text-center mt-1 fw-light'>{item.name}</h5>
                    </div>
                )
            })
            }
            </div>
        </section>
    )
}
