import {SHOW_MODAL, HIDE_MODAL} from '../actions/MovieDetailModal'
import Movie from "../models/movie";


const MovieDetailReducer = (state = {showing: false, movie: null}, action) => {

    switch(action.type){
        case SHOW_MODAL:
            if( ! action.movie || ! action.movie instanceof  Movie){
                return state
            }

            return Object.assign({}, state, {showing: true, movie: action.movie})

        case HIDE_MODAL:
            return Object.assign({}, state, {showing: false, movie: null})

        default:
            return state
    }

}

export default MovieDetailReducer;