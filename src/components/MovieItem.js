import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'


const MovieItem = ({movie, onClick}) => {

    return (
        <div className="movie-item-container-single col-3 col-sm-3 col-md-3 col-lg-2">
            <figure
                className="movie-item image-btn-container"
                onClick={() => onClick(movie)}>
                <img src={movie.getImage() || cover} alt={movie.title || "Movie Cover"} className="movie-img"/>

                <a className="btn like-button like-button btn-sm" href="#">
                    <i className="fa fa-heart-o text-red"></i>
                </a>

            </figure>

        </div>
    );
}

MovieItem.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    onClick: PropTypes.func.isRequired
}

export default MovieItem;
