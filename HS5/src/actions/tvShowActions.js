import * as types from '../types/tvShow'
import { tvShowsURL } from '../utils'

export function loadTvShowSuccess(tvshow){
    return { type: types.LOAD_TVSHOW_SUCCESS, tvshow }
}

export function loadTvShowFailure(){
    return { type: types.LOAD_TVSHOW_FAILURE }
}

export function loadTvShow(id){
    console.log(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(tvshow => dispatch(loadTvShowSuccess(tvshow)))
        .catch(error => {
            dispatch(loadTvShowFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function TvShowRecomendada(id){
    console.log(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`)
        .then(response => response.json())
        .then(tvshow => dispatch(loadTvShowSuccess(tvshow)))
        .catch(error => {
            dispatch(loadTvShowFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function comentar(id, comentario, username){
    console.log("Entra en comentar")
    const objeto = {tvShowId: id, body: comentario, user: username, tipo: 'tvshow'}
    return dispatch => {
        fetch(tvShowsURL['comentarios'](id),
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







