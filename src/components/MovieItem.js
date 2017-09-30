import React from 'react'
import PropTypes from 'prop-types'
import cover from '../movie_cover.jpg'


let MovieItem = (props) => {

    return (
        <div className="movie-item -container-single col-3 col-sm-3 col-md-3 col-lg-2">
            <figure className="movie-item">
                <img src={cover} alt="movie-cover" className="movie-img"/>

                <a className="btn like-button btn-sm" href="#">
                    <i className="fa fa-heart-o text-red"></i>
                </a>

            </figure>

        </div>
    );
}

export default MovieItem;
