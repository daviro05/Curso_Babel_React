import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import logo from '../../images/logo.svg'

class Header extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            numberOfMovies: props.numberOfMovies,
            MoviesyShows: props.MoviesyShows
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            numberOfMovies: nextProps.numberOfMovies,
            MoviesyShows: nextProps.MoviesyShows
        })
    }

    render() {
        const { numberOfMovies, MoviesyShows } = this.state
        return (
            <div className="row">
            <header className="main-nav d-flex col-12" style={{flexDirection: 'column'}}>
                <div className="logo-wrapper d-flex">
                    <img src={logo} alt="TMDB"/>
                    {numberOfMovies > 0 && <h1 style={{color: 'white'}}>{numberOfMovies}</h1>}
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to={`/movies`}>Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/tvshows`}>TV Shows</Link>
                            </li>
                        </ul>
                    </div>

                     <div className="navbar-form" role="search">
                        <div className="input-group add-on">
                        <input className="form-control" placeholder="Buscar" name="srch-term" id="srch-term" type="text"/>
                    </div>
                    </div>

                </nav>
            </header>
            <div>
            {MoviesyShows}
            </div>
        </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        numberOfMovies: state.movies.length
        //MoviesyShows: state.movies
    }
}

function mapDispatchToProps(dispatch){
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)