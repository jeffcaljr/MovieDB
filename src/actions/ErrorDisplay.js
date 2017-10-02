export const ADD_ERROR = "ADD_ERROR";
export const REMOVE_ERROR = "REMOVE_ERROR"


export const addError = error => {
    return {
        type: ADD_ERROR,
        error: error
    }
}

export const removeError = index => {
    return {
        type: REMOVE_ERROR,
        index: index
    }
}