import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import movies from './moviesReducer'

const rootReducer = combineReducers({
    movies, 
    router: routerReducer
})

export default rootReducer
