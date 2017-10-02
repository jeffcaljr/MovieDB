export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL"


export const show = (movie) => {
    return {
        type: SHOW_MODAL,
        movie
    }
}

export const hide = () => {
    return {
        type: HIDE_MODAL
    }
}