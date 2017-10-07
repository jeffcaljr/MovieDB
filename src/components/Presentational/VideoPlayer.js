import React from "react"
import PropTypes from 'prop-types'




const VideoPlayer = ({className, movie, closeVideo}) =>{

    const closeWindow = () => {
        closeVideo()
    }


    return (
        <div className={className + " video-player "}>

            <div className="header w-100 text-left">
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
                allowFullScreen={true}></iframe>
        </div>
    );

}


VideoPlayer.propTypes = {
    className: PropTypes.string
}


VideoPlayer.defaultProps = {
    className: ""
}


export default VideoPlayer;

