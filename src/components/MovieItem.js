import React from 'react'
import PropTypes from 'prop-types'
import cover from '../movie_cover.jpg'


const MovieItem = (props) => {

    return (
        <div className="movie-item-container-single col-3 col-sm-3 col-md-3 col-lg-2">
            <figure
                className="movie-item image-btn-container"
                onClick={() => props.onClick()}>
                <img src={cover} alt="movie-cover" className="movie-img"/>

                <a className="btn like-button like-button btn-sm" href="#">
                    <i className="fa fa-heart-o text-red"></i>
                </a>

            </figure>

        </div>
    );
}

MovieItem.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default MovieItem;
