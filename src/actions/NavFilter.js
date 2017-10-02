export const SHOW_TRENDING = "SHOW_TRENDING";
export const SHOW_CATEGORY = "SHOW_CATEGORY";


export const setCategory = (genreID) => {
    return {
        type: SHOW_CATEGORY,
        id: genreID
    }
}

export const showTrending = () => {
    return {
        type: SHOW_TRENDING
    }
}