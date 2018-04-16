import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../images/logo.svg'

const Header = () => (
    <div className="row">
        <header className="main-nav d-flex col-12" style={{flexDirection: 'column'}}>
            <div className="logo-wrapper d-flex">
                <img src={logo} alt="TMDB"/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to={`/`}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`/movies`}>Movies</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
)

export default Header