import React from 'react'
import PropTypes from 'prop-types'

import FavoriteButton from "../FavoriteButton";
import ScrollingTextView from "./ScrollingTextView";

import Movie from '../../models/Movie'
import cover from '../../images/default-movie-cover.jpg'


const MovieItem = ({movie, isFavorite, toggleFavorite, showDetailModal}) => {

    return (
        <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
            <figure
                className="movie-item image-btn-container w-100"
                onClick={() => showDetailModal()}>
                <img src={ cover && movie.getImage() } alt={movie.title || "Movie Cover"} className="movie-img"/>
                <div className="text-white text-center movie-item-details">
                    <FavoriteButton isFavorite={isFavorite} toggledFavorite={() => toggleFavorite()}/>

                    <ScrollingTextView
                        className="movie-item-details-title typeface-sans-serif"
                        text={movie.title}
                    />
                </div>
            </figure>
        </div>
    );

}


MovieItem.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    similarMovie: PropTypes.bool
}

export default MovieItem;
