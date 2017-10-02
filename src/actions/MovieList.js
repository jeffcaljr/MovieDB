export const LOAD = "LOAD";
export const LOAD_MORE = "LOAD_MORE";
export const STATUS_LOADING = "STATUS_LOADING";
export const STATUS_ERROR = "STATUS_ERROR";
// export const STATUS_SUCCESS = "STATUS_SUCCESS";
export const STATUS_NONE = "STATUS_NONE";



export const load = (genreID) => {
    return{
        type: LOAD,
        genreID: genreID
    }
}

export const loadMore = () => {
    return{
        type: LOAD_MORE
    }
}

export const loading = () => {
    return{
        type: STATUS_LOADING
    }
}

// export const success = (result) => {
//     return{
//         type: STATUS_SUCCESS,
//         result
//     }
// }

export const error = (err) => {
    return{
        type: STATUS_ERROR,
        error: err
    }
}

export const done= (result = undefined) => {
    return{
        type: STATUS_NONE,
        result
    }
}
