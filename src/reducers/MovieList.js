import "isomorphic-fetch"

import {
    LOAD, LOAD_MORE, STATUS_LOADING, STATUS_ERROR, STATUS_NONE, MOVIE_TOGGLE_LIKED, error, done,
    loading
} from '../actions/MovieList'
import {TRENDING_GENRE} from '../constants/genres'
import config from "../config";
import Movie from "../models/movie";

const reducer = (state = {page: 1, movies: [], lastGenreID: undefined, status: STATUS_NONE, error: null}, action) => {
    switch(action.type){
        case LOAD:

            //if the last category fetched is the same as the new request, do nothing
            if(action.genreID === state.lastGenreID){
                return state
            }

            const defaultPage = 1;

            switch (action.genreID){
                case TRENDING_GENRE.id:
                    action.asyncDispatch(loading());
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${defaultPage}`)
                        .then( (res) => res.json())
                        .then((res) => {
                            let moviesJSON = res.results;
                            let movies = []
                            moviesJSON.map( (newMovie) => {
                                let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                                movies.push(movie)
                            })
                            action.asyncDispatch(done(movies))
                        })
                        .catch((err) => action.asyncDispatch(error(err)));


                    return Object.assign({}, state, {page: defaultPage, lastGenreID: TRENDING_GENRE.id})

                default:
                    action.asyncDispatch(loading());
                    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${defaultPage}&with_genres=${action.genreID}`)
                        .then( (res) => res.json())
                        .then((res) => {
                            let moviesJSON = res.results;
                            let movies = []
                            moviesJSON.map( (newMovie) => {
                                let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                                movies.push(movie)
                            })
                            action.asyncDispatch(done(movies))
                        })
                        .catch((err) => action.asyncDispatch(error(err)))
                    return Object.assign({}, state, {page: defaultPage, lastGenreID: action.genreID})
            }


        case LOAD_MORE:
            const newPage = ++state.page;

            let movies = []

            if(state.lastGenreID === TRENDING_GENRE.id){
                action.asyncDispatch(loading());
                fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${newPage}`)
                    .then( (res) => res.json())
                    .then((res) => {
                        let moviesJSON = res.results;

                        moviesJSON.map( (newMovie) => {
                            let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                            movies.push(movie)
                        })
                        action.asyncDispatch(done(movies, true))
                    })
                    .catch((err) => action.asyncDispatch(error(err)));

                return Object.assign({}, state, {page: newPage})
            }
            else{
                let movies = []
                action.asyncDispatch(loading());
                fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${newPage}&with_genres=${state.lastGenreID}`)
                    .then( (res) => res.json())
                    .then((res) => {
                        let moviesJSON = res.results;

                        moviesJSON.map( (newMovie) => {
                            let movie = new Movie(newMovie.id, newMovie.title, newMovie["release_date"], "", newMovie.overview, newMovie["vote_average"], newMovie["vote_count"], newMovie["genre_ids"], newMovie.video, newMovie["poster_path"])
                            movies.push(movie)
                        })
                        action.asyncDispatch(done(movies, true))
                    })
                    .catch((err) => action.asyncDispatch(error(err)))
                return Object.assign({}, state, {page: newPage})
            }


        case STATUS_LOADING:
            return Object.assign({}, state, {status: STATUS_LOADING});

        case STATUS_ERROR:
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