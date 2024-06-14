import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar() {

    return (

        <div className="container-fluid bg-info">
            <nav className="navbar navbar-expand-lg bg-info justify-content-end">
                <div className="container-fluid justify-content-end">
                    <Link className="navbar-brand fw-light fs-3" to="/">We Movies</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                            <ul className="nav nav-pills">
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="./Trending">movies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/TrendingTv">tv show</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="TrendingP">Trending People</Link>
                                </li>
                            </ul>
                           </div>
                            <FontAwesomeIcon icon={faFacebook} className='p-2' fade />
                            <FontAwesomeIcon icon={faInstagram} fade />
                            <FontAwesomeIcon icon={faTwitter} fade className='p-2' />
                            <FontAwesomeIcon icon={faSpotify} fade />
                        </div>

                    </nav>

                </div>

                )

}




