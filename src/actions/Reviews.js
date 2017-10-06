export const LOADING_REVIEWS = "LOADING_REVIEWS";
export const REVIEWS_LOADED = "REVIEWS_LOADED";
export const LOAD_REVIEWS = "LOAD_REVIEWS";

export const loadReviews= (movieID) => {
    return{
        type: LOAD_REVIEWS,
        movieID
    }
}

export const done = (result, didReset = false) => {
    return{
        type: REVIEWS_LOADED,
        result,
        didReset
    }
}

export const loading = () => {
    return{
        type: LOADING_REVIEWS
    }
}