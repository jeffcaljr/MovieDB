import 'isomorphic-fetch'

import {
    OPEN_VIDEO_PLAYER, CLOSE_VIDEO_PLAYER, VIDEO_PLAYER_ERROR, VIDEO_PLAYER_SOURCE_LOADED, error, sourceLoaded} from "../actions/VideoPlayer";
import {addError} from '../actions/ErrorDisplay'
import Movie, {BASE_VIDEOS_URL_PREFIX, BASE_VIDEOS_URL_SUFFIX, BASE_YOUTUBE_URL} from "../models/movie";



const VideoPlayerReducer = (state = {videoPlayerIsOpen: false, source: undefined, error: undefined}, action) => {

    switch (action.type){
        case OPEN_VIDEO_PLAYER:


            //dont modify state if no video/improper argument passed in
            if( !action.video || !(action.video instanceof Movie)){
                return state
            }



            const url = `${BASE_VIDEOS_URL_PREFIX}${action.video.id}${BASE_VIDEOS_URL_SUFFIX}`;


            fetch(url)
                .then( res => res.json())
                .then( res => {
                    const results = res.results;
                    const trailers = results.filter((video) => {return video.type === "Trailer"})
                    const firstTrailerVideo = trailers.find((video) => {return video["site"] === "YouTube"})
                    //
                    if(firstTrailerVideo != undefined){
                        let youtubeURL = `${BASE_YOUTUBE_URL}${firstTrailerVideo["key"]}/?autoplay=1`
                        action.asyncDispatch(sourceLoaded(youtubeURL))
                    }
                    else{
                        action.asyncDispatch(error(new Error("No trailer found")))
                    }
                })
                .catch(err => { action.asyncDispatch(error(err))})




            return Object.assign({}, state, {videoPlayerIsOpen: true});

        case CLOSE_VIDEO_PLAYER:
            return Object.assign({}, state, {videoPlayerIsOpen: false, source: undefined, error: undefined})

        case VIDEO_PLAYER_SOURCE_LOADED:
            return Object.assign({}, state, {videoPlayerIsOpen: true, video: action.video, error: undefined});

        case VIDEO_PLAYER_ERROR:
            action.asyncDispatch(addError(action.error))
            return Object.assign({}, state, {source: undefined, error: action.error})

        default:
            return state
    }
}

export default VideoPlayerReducer;