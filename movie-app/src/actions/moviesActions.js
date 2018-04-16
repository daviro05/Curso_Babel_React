import * as types from '../types/movies'

export function loadMoviesSuccess(movies, page){
    return { type: types.LOAD_MOVIES_SUCCESS, movies, page }
}

export function loadMoviesFailure(){
    return { type: types.LOAD_MOVIES_FAILURE }
}

export function loadMovies(page = 1){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}`)
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function loadComingSoon(page = 1){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}&language=es-ES`)
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function popularMovies(page = 1){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}&language=es-ES`)
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}

export function topMovies(page = 1){
    return dispatch => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${page}&language=es-ES`)
        .then(response => response.json())
        .then(json => json.results)
        .then(movies => dispatch(loadMoviesSuccess(movies, page)))
        .catch(error => {
            dispatch(loadMoviesFailure())
            alert('We could not load the page at this time.')
        })
    }
}







