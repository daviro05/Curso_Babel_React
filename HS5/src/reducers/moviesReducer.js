import * as types from '../types/movies'
import initialState from './initialState'
import _ from 'lodash'

export default function moviesReducer(state = initialState.movies, action){
    switch(action.type){
        case types.LOAD_COMMENTS_SUCCESS:
        return action.comments
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
        _.remove(state, (o) => {
            return o.id == action.id
        });
        return [...state]
        default:
        return state
  }
}
