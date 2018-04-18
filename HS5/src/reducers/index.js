import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from './moviesReducer'
import movie from './movieReducer'
import tvshows from './tvShowsReducer'
import tvshow from './tvShowReducer'

const rootReducer = combineReducers({
    movies, 
    movie,
    tvshows,
    tvshow,
    router: routerReducer
})

export default rootReducer
