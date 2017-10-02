import {LOAD, LOAD_MORE, STATUS_LOADING, STATUS_NONE, STATUS_ERROR, loading, success, error} from '../actions/MovieList'
import 'isomorphic-fetch'
import {TRENDING_GENRE} from "../constants/genres";

const middleware = store => next => action => {
    if(!action){
        next(action)
    }
    else{
        const dispatch = store.dispatch;

        switch(action.type){
            case LOAD:
                dispatch(loading());
                switch(action.genreID){
                    case TRENDING_GENRE:
                        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIEDB_KEY}&language=en-US&page=${store.state.page}`)
                            .then( (res) => {
                                if(res.ok){
                                    dispatch(success(res.json()))
                                }
                                else{
                                    dispatch(error(new Error("No results")))
                                }
                            })
                            .catch((err) => dispatch(error(err)))

                    default:

                        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${config.MOVIEDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genres=${action.genreID}`)
                            .then( (res) => {
                                if(res.ok){
                                    dispatch(success(res.json()))
                                }
                                else{
                                    dispatch(error(new Error("No results")))
                                }
                            })
                            .catch((err) => dispatch(error(err)))

                }


            case LOAD_MORE:
                //
            default:
                next(action)
        }
    }
}

export default middleware;