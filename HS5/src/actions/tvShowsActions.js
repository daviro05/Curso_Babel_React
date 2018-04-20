import * as types from '../types/tvShows'
import { tvShowsURL } from '../utils'

export function loadTvShowsSuccess(tvshows, page){
    return { type: types.LOAD_TVSHOWS_SUCCESS, tvshows, page }
}

export function loadTvShowsFailure(){
    return { type: types.LOAD_TVSHOWS_FAILURE }
}

export function deleteTvShowsSuccess(id){
    return { type: types.DELETE_TVSHOWS_SUCCESS, id}
}

export function loadCommentsSuccess(comments){
    return { type: types.LOAD_COMMENTS_SUCCESS, comments}
}

export function loadTvShows(page = 1, endpoint = 'popular'){
    console.log("Peticion a loadTvShows " + tvShowsURL[endpoint](page))
    return dispatch => {
        fetch(tvShowsURL[endpoint](page))
        .then(response => response.json())
        .then(json => json.results)
        .then(tvshows => dispatch(loadTvShowsSuccess(tvshows, page)))
        .catch(error => {
            dispatch(loadTvShowsFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function tvShowOptions(id = 1, endpoint = 'similares', page = 1){
    console.log("Peticion a tvShowOptions " + tvShowsURL[endpoint](id))
    return dispatch => {
        fetch(tvShowsURL[endpoint](id))
        .then(response => response.json())
        .then(json => json.results)
        .then(tvshows => dispatch(loadTvShowsSuccess(tvshows, page)))
        .catch(error => {
            dispatch(loadTvShowsFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function deleteTvShow(id){
    console.dir(id)
    return dispatch => {
        dispatch(deleteTvShowsSuccess(id))
    }
}

export function obtenerComentarios(id){
    console.log("Entramos en obtener comentarios")
    return dispatch => {
        fetch(tvShowsURL['obtenerComentarios'](id))
        .then(response => response.json())
        .then(comments => dispatch(loadCommentsSuccess(comments)))

    }
}









