import "isomorphic-fetch"

import {
    LOAD, LOAD_MORE, STATUS_LOADING, STATUS_ERROR, STATUS_NONE, MOVIE_TOGGLE_LIKED, error, done,
    loading, SEARCH_MOVIES
} from '../actions/MovieList'
import {ALL_POSSIBLE_GENRES, NEW_RELEASES, NOW_PLAYING, SEARCHED, TRENDING_GENRE, UPCOMING} from '../constants/genres'
import config from "../config";
import Movie, {
    BASE_NOW_PLAYING_URL, BASE_SEARCH_URL_PREFIX, BASE_SEARCH_URL_SUFFIX,
    BASE_UPCOMING_MOVIES_URL
} from "../models/movie";
import {addError} from "../actions/ErrorDisplay";

const reducer = (state = {page: 1, movies: [], lastGenreID: undefined, lastQueryString: undefined, status: STATUS_NONE, error: null}, action) => {
    switch(action.type){
        case LOAD:

            //if the last category fetched is the same as the new request, do nothing
            if(action.genreID === state.lastGenreID){
                return state
            }

            let loadedURL = ""
            let loadedGenreID;

            switch(action.genreID){
                case TRENDING_GENRE.id:
                    loadedURL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${1}`;
                    loadedGenreID = TRENDING_GENRE.id
                    break;
                case NEW_RELEASES.id:
                    loadedGenreID = NEW_RELEASES.id
                    break;
                case NOW_PLAYING.id:
                    loadedURL = `${BASE_NOW_PLAYING_URL}${1}`
                    loadedGenreID = NOW_PLAYING.id
                    break;
                case UPCOMING.id:
                    loadedURL = `${BASE_UPCOMING_MOVIES_URL}${1}`;
                    loadedGenreID = UPCOMING.id
                    break;
                default:
                    loadedURL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${1}&with_genres=${action.genreID}`;
                    loadedGenreID = action.genreID;
            }

            action.asyncDispatch(loading());
            fetch(loadedURL)
                .then( (res) => res.json())
                .then( (res) => {
                    let moviesJSON = res.results;
                    let movies = []
                    moviesJSON.map( (newMovie) => {
                        let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                        movies.push(movie)
                    })
                    action.asyncDispatch(done(movies, false))

                })
                .catch((err) => action.asyncDispatch(error(err)));

            return Object.assign({}, state, {lastGenreID: loadedGenreID, page: 1});


        case LOAD_MORE:
            const newPage = ++state.page;


            let loadMoreURL = ""
            let loadMoreGenreID;

            switch(state.lastGenreID){
                case TRENDING_GENRE.id:
                    loadMoreURL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${newPage}`;
                    loadMoreGenreID = TRENDING_GENRE.id
                    break;
                case NEW_RELEASES.id:
                    loadMoreGenreID = NEW_RELEASES.id
                    break;
                case NOW_PLAYING.id:
                    loadMoreURL = `${BASE_NOW_PLAYING_URL}${newPage}`
                    loadMoreGenreID = NOW_PLAYING.id
                    break;
                case UPCOMING.id:
                    loadMoreURL = `${BASE_UPCOMING_MOVIES_URL}${newPage}`;
                    loadMoreGenreID = UPCOMING.id
                    break;
                case SEARCHED.id:
                    loadMoreURL = `${BASE_SEARCH_URL_PREFIX}${state.lastQueryString}${BASE_SEARCH_URL_SUFFIX}${newPage}`;
                    loadMoreGenreID = SEARCHED.id
                    break;
                default:
                    loadMoreURL = `https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${newPage}&with_genres=${action.genreID}`;
            }


            action.asyncDispatch(loading());
            fetch(loadMoreURL)
                .then( (res) => {return res.json()})
                .then((res) => {
                    let moviesJSON = res.results;


                    let newMovies = []

                    moviesJSON.map( (newMovie) => {
                        let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                        newMovies.push(movie)
                    })

                    action.asyncDispatch(done(newMovies, true))
                })
                .catch((err) => action.asyncDispatch(error(err)));

            return Object.assign({}, state, {page: newPage, lastGenreID: loadMoreGenreID})


        case SEARCH_MOVIES:
            if( !action.queryString ){
                return state;
            }

            let queryString = action.queryString;


            action.asyncDispatch(loading());
            let url = `${BASE_SEARCH_URL_PREFIX}${queryString}${BASE_SEARCH_URL_SUFFIX}${1}`
            fetch(url)
                .then( (res) => {
                    if(res.ok) { return res.json()}
                    else{ return Promise.reject(new Error("Error loading movies"))}
                })
                .then((res) => {
                    let moviesJSON = res.results;
                    let movies = []
                    moviesJSON.map( (newMovie) => {
                        let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                        movies.push(movie)
                    })
                    action.asyncDispatch(done(movies, false))
                })
                .catch((err) => action.asyncDispatch(error(err)));

            return Object.assign({}, state, {page: 1, lastGenreID: SEARCHED.id, lastQueryString: queryString})


        case STATUS_LOADING:
            return Object.assign({}, state, {status: STATUS_LOADING});

        case STATUS_ERROR:
            action.asyncDispatch(addError(action.error))
            return Object.assign({}, state, {status: STATUS_ERROR, error: action.error});

        case STATUS_NONE:


            if(action.didReset){
                return Object.assign({}, state, {status: STATUS_NONE, movies: state.movies.concat(action.result), error: null})
            }
            else{
                return Object.assign({}, state, {status: STATUS_NONE, movies: action.result, error: null})
            }

        case MOVIE_TOGGLE_LIKED:



            const movieToggledIndex = state.movies.findIndex( movie => {return movie.id === action.movie.id})

            let moviesCopy = state.movies.slice()

            const modifiedMovie = Object.assign({}, moviesCopy[movieToggledIndex], {favorited: !moviesCopy[movieToggledIndex].favorited})

            moviesCopy[movieToggledIndex] = modifiedMovie


            return Object.assign({}, state, {movies: moviesCopy})


        default:
            return state;
    }
}

export default reducer;