import React from 'react'
import PropTypes from 'prop-types'

import Movie from "../models/Movie";
import cover from '../images/default-movie-cover.jpg'

const MovieCover = ({movie, playVideo, children}) => {

    const playPressed = e =>{
        e.stopPropagation()
        playVideo(movie)
    }

    return (
        <figure className="movie-img-container image-btn-container">
            <img src={movie.getImage() || cover}
                 alt={movie.title || "Movie Cover"} className="movie-img"/>

            {
                playVideo != undefined ?
                    <a
                        href="#"
                        className={"cover-button play-button "}
                        onClick={ e => playPressed(e)}
                    ><i className="fa fa-play fa-3x"></i></a>
                    : null
            }

            }

            {children}
        </figure>
    );
}

MovieCover.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    playVideo: PropTypes.func,
    children: PropTypes.node
}

export default MovieCover