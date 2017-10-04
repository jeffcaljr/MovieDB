import {SHOW_MODAL, HIDE_MODAL} from '../actions/MovieDetailModal'
import Movie from "../models/movie";
import {loadSimilarMovies} from "../actions/SimilarMovies";


const MovieDetailReducer = (state = {showing: false, movie: null}, action) => {

    switch(action.type){
        case SHOW_MODAL:
            if( ! action.movie || ! action.movie instanceof  Movie){
                return state
            }

            //handle case where modal is already showing, but user clicked similar movie item to show modal for that movie

            if(state.showing && (action.movie.id !== state.movie.id)){
                action.asyncDispatch(loadSimilarMovies(action.movie.id))
            }

            return Object.assign({}, state, {showing: true, movie: action.movie})

        case HIDE_MODAL:
            return Object.assign({}, state, {showing: false, movie: null})

        default:
            return state
    }

}

export default MovieDetailReducer;