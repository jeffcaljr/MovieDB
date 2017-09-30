import React from 'react'
import PropTypes from 'prop-types'
import cover from '../movie_cover.jpg'


let MovieItem = (props) => {

    return (
        <div className="movie-item col-3 col-sm-3 col-md-3 col-lg-2">
            <img src={cover} alt="movie-cover" className="movie-img"/>
        </div>
    );
}

export default MovieItem;
