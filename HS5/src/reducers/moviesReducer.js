import * as types from '../types/movies'
import initialState from './initialState'

export default function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case types.LOAD_MOVIES_SUCCESS:
            if(action.page === 1) {
                return action.movies
            }
            else {
                return [
                    ...state,
                    ...action.movies,
                ]
            }
            break;
        case types.DELETE_MOVIES_SUCCESS:
            console.log("Has entrado en el reducer")
        default:
        return state
  }
}
