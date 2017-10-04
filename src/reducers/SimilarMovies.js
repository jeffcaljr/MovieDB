import 'isomorphic-fetch'
import {LOAD_SIMILAR_MOVIES, LOADING_SIMILAR_MOVIES, SIMILAR_MOVIES_LOADED, loading, done} from '../actions/SimilarMovies'
import {
    BASE_SEARCH_URL_PREFIX, BASE_SEARCH_URL_SUFFIX, BASE_SIMILAR_MOVIES_URL_PREFIX,
    BASE_SIMILAR_MOVIES_URL_SUFFIX
} from "../models/movie";
import {addError} from "../actions/ErrorDisplay";
import Movie from "../models/movie";

const SimilarMoviesReducer = (state = {movieID: undefined, loading: false, similarMovies: [], page: 1}, action) =>{

    switch(action.type){
        case LOAD_SIMILAR_MOVIES:

            //dont attempt to load similar movies if action doesnt contain movie id, or the similar movies
            //for the given id have already been loaded

            if(action.movieID == undefined || action.movieID === state.movieID){
                return state;
            }

            // alert("loading similar movies")

            action.asyncDispatch(loading());

            let url = `${BASE_SIMILAR_MOVIES_URL_PREFIX}${action.movieID}${BASE_SIMILAR_MOVIES_URL_SUFFIX}${1}`;

            console.log("similar movies url: " + url);

            fetch(url)
                .then( (res) => {return res.json()})
                .then( (res) => {
                    let moviesJSON = res.results;
                    let movies = []
                    moviesJSON.map( (newMovie) => {

                        let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                        movies.push(movie)
                    })
                    action.asyncDispatch(done(movies, false))

                })
                .catch((err) => {
                    action.asyncDispatch(addError(err))
                })

            return Object.assign({}, state, {movieID: action.movieID, page: 1})


        case LOADING_SIMILAR_MOVIES:
            return Object.assign({}, state, {loading: true});

        case SIMILAR_MOVIES_LOADED:

            if(action.didReset){
                return Object.assign({}, state, {loading: false, similarMovies: state.similarMovies.concat(action.result)})
            }
            else{
                return Object.assign({}, state, {loading: false, similarMovies: action.result})
            }
        default:
            return state;
    }
}

export default SimilarMoviesReducer;