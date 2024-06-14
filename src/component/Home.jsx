import React from 'react'
import img1 from"../Movies_end_of_year_2017 (2).jpg"
export default function Home() {
  return (
    <div>
         <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
        <h2 className='text-info text-center p-3'>Welcome To Our World<br/>Where You Can Watch What You Want<br/>Go And Have A Seet!</h2>
                 
        </div>
        <div className='row'>
        <div className='col-md-12 d-flex justify-content-center align-content-center'>
      <button type='button' className='btn btn-outline-info text-center mb-3 btn-block'>Press To Start</button>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 d-flex justify-content-center align-content-center'>
       <img src={img1} alt=''></img>
        </div>
      </div>

    </div>
    </div>
  
    </div>
  )
}
