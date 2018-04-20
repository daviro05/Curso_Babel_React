import * as types from '../types/movie'
import { moviesURL } from '../utils'

export function loadMovieSuccess(movie){
    return { type: types.LOAD_MOVIE_SUCCESS, movie }
}

export function loadMovieFailure(){
    return { type: types.LOAD_MOVIE_FAILURE }
}

export function loadMovie(id){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(movie => dispatch(loadMovieSuccess(movie)))
        .catch(error => {
            dispatch(loadMovieFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function loadMovieRandom(){

    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(movie_lat => {
            let id = Math.floor((Math.random() * movie_lat.id) + 30)
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
            .then(response => response.json())
            .then(movie => dispatch(loadMovieSuccess(movie)))
            .catch(error => {
                dispatch(loadMovieFailure())
                alert('We could not load the page at this time.')
            })
        })
        .catch(error => {
            dispatch(loadMovieFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function comentar(id, comentario, username){
    console.log("Entra en comentar")
    const objeto = {movieId: id, body: comentario, user: username, tipo: 'movie'}
    return dispatch => {
        fetch(moviesURL['comentarios'](id),
        {
            method: 'post',
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            },
                body: JSON.stringify(objeto)
        })        
    }
}

export function obtenerComentarios(){
    console.log("Obteniendo comentarios")
    
    
}






