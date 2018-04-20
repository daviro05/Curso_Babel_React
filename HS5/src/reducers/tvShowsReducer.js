import * as types from '../types/tvShows'
import initialState from './initialState'
import _ from 'lodash'

export default function moviesReducer(state = initialState.tvshows, action){
    switch(action.type){
        case types.LOAD_COMMENTS_SUCCESS:
            return action.comments
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
            case types.DELETE_TVSHOWS_SUCCESS:
                _.remove(state, (o) => {
                return o.id == action.id
            });
            return [...state]
        default:
        return state
  }
}
