import React from 'react'
import { Link } from 'react-router-dom'

import * as moviesActions from '../../actions/moviesActions'
import * as tvShowsActions from '../../actions/tvShowsActions'


const MovieTvShow = ({tipo, poster_path, id, title, overview, name}) => (

    <article 
        className="col-md-3 my-4 movie-item"
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w342/${poster_path})`}}
    >
        <div className="overlay">
            <header className="w-100 pt-3 px-3">
                <Link className="d-block" to={`/${tipo}/${id}`}>{title === undefined ? name : title}</Link>
            </header>
            <p>{overview}</p>
            <p><button onClick={tipo === 'movies' ? () => moviesActions.deleteMovie(id) :
             () => tvShowsActions.deleteTvShow(id)}>Eliminar</button></p>
        </div>
    </article>
)

export default MovieTvShow