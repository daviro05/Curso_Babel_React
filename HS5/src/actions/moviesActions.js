import * as types from '../types/movies'
import { moviesURL } from '../utils'

export function loadMoviesSuccess(movies, page){
    return { type: types.LOAD_MOVIES_SUCCESS, movies, page }
}

export function loadMoviesFailure(){
    return { type: types.LOAD_MOVIES_FAILURE }
}

export function deleteMovieSuccess(id){
    return { type: types.DELETE_MOVIES_SUCCESS , id}
}

export function loadCommentsSuccess(comments){
    return { type: types.LOAD_COMMENTS_SUCCESS, comments}
}

export function deleteMovie(id){

    return dispatch => {
        console.log("Entra en el dispatch")
        dispatch(deleteMovieSuccess(id))
    }
}


export function loadMovies(page = 1, endpoint = 'popular'){
    return dispatch => {
        fetch(moviesURL[endpoint](page))
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function moviesOptions(id = 1, endpoint = 'similares', page = 1){
    console.log("Peticion a moviesOptions " + moviesURL[endpoint](id))
    return dispatch => {
        fetch(moviesURL[endpoint](id))
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function obtenerComentarios(id){
    console.log("Entramos en obtener comentarios de movies")
    return dispatch => {
        fetch(moviesURL['obtenerComentarios'](id))
        .then(response => response.json())
        .then(comments => dispatch(loadCommentsSuccess(comments)))

    }
}




