export const LOADING_SIMILAR_MOVIES = "LOADING_SIMILAR_MOVIES";
export const SIMILAR_MOVIES_LOADED = "SIMILAR_MOVIES_LOADED";
export const LOAD_SIMILAR_MOVIES = "LOAD_SIMILAR_MOVIES";


export const loadSimilarMovies = (movieID) => {
    return{
        type: LOAD_SIMILAR_MOVIES,
        movieID
    }
}

export const done = (result, didReset = false) => {
    return{
        type: SIMILAR_MOVIES_LOADED,
        result,
        didReset
    }
}

export const loading = () => {
    return{
        type: LOADING_SIMILAR_MOVIES
    }
}

