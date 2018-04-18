import * as types from '../types/tvShow'
import initialState from './initialState'

export default function tvShowsReducer(state = initialState.tvshow, action){
    switch(action.type){
        case types.LOAD_TVSHOW_SUCCESS:
            return action.tvshow
        default:
            return state
  }
}
