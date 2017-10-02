import React, {Component} from "react"
import {connect} from 'react-redux'

import {closeVideo} from "../actions/VideoPlayer";



const VideoPlayer = ({movie, closeVideo}) =>{


    const closeWindow = () => {
        closeVideo()
    }

    return (
        <div className="video-player">

            <div className="header w-100 text-right">
                <a
                    href="#"
                    className="btn"
                    onClick={closeWindow}>
                    <i className="fa fa-close text-white"></i>
                </a>
            </div>

            <iframe
                width="500"
                height="500"
                src={movie}
                className="youtube-player"
                controls
                allowFullScreen={true}></iframe>
        </div>
    );

}


const mapStateToProps = state => {
    return {
        movie: state.videoPlayerReducer.video
    }
}

const mapDispatchToProps = dispatch => {
    return{
        closeVideo: () => {
            dispatch(closeVideo())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer)

