import * as types from '../types/tvShows'
import initialState from './initialState'

export default function moviesReducer(state = initialState.tvshows, action){
    switch(action.type){
        case types.LOAD_TVSHOWS_SUCCESS:
            if(action.page === 1) {
                return action.tvshows
            }
            else {
                return [
                    ...state,
                    ...action.tvshows,
                ]
            }
        default:
        return state
  }
}
