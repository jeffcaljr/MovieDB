
export const OPEN_VIDEO_PLAYER = "OPEN_VIDEO_PLAYER";
export const CLOSE_VIDEO_PLAYER = "CLOSE_VIDEO_PLAYER";
export const VIDEO_PLAYER_ERROR = "VIDEO_PLAYER_ERROR";
export const VIDEO_PLAYER_SOURCE_LOADED = "VIDEO_PLAYER_SOURCE_LOADED";


export const openVideo = (movie) => {
    return{
        type: OPEN_VIDEO_PLAYER,
        video: movie
    }
}

export const closeVideo = () => {
    return {
        type: CLOSE_VIDEO_PLAYER,
        video: null
    }
}

export const sourceLoaded = (src) =>{
    return{
        type: VIDEO_PLAYER_SOURCE_LOADED,
        video: src
    }
}

export const error = err => {
    return{
        type: VIDEO_PLAYER_ERROR,
        error: err
    }
}