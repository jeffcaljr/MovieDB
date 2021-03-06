export const LOAD = "LOAD";
export const LOAD_MORE = "LOAD_MORE";
export const SEARCH_MOVIES = "SEARCH_MOVIES";
export const STATUS_LOADING = "STATUS_LOADING";
export const STATUS_ERROR = "STATUS_ERROR";
export const STATUS_NONE = "STATUS_NONE";
export const MOVIE_TOGGLE_LIKED = "MOVIE_TOGGLE_LIKED";






export const load = (genreID) => {
    return {
        type: LOAD,
        genreID: genreID
    }
}

export const searchMovies = queryString => {
    return{
        type: SEARCH_MOVIES,
        queryString
    }
}

export const loadMore = () => {
    return {
        type: LOAD_MORE
    }
}

export const loading = () => {
    return {
        type: STATUS_LOADING
    }
}

export const error = (err) => {
    return {
        type: STATUS_ERROR,
        error: err
    }
}

export const done= (result = undefined, didReset = false) => {
    return {
        type: STATUS_NONE,
        didReset,
        result
    }
}

export const toggleLiked = movie => {
    return {
        type: MOVIE_TOGGLE_LIKED,
        movie
    }
}
