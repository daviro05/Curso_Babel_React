import * as types from '../types/movie'

export function loadMovieSuccess(movie){
    return { type: types.LOAD_MOVIE_SUCCESS, movie}
}

export function loadMovieFailure(){
    return { type: types.LOAD_MOVIE_FAILURE }
}

export function loadMovie(id){
    //console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&languaje=es-ES`)
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&languaje=es-ES`)
        .then(response => response.json())
        .then(movie => dispatch(loadMovieSuccess(movie)))
        .catch(error => alert('No se puede mostrar la pelicula en este momento'))
    }
}







