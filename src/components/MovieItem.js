import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";
import {show} from "../actions/MovieDetailModal";
import {error, toggleLiked} from "../actions/MovieList";



const MovieItem = ({movie, isFavorite, showDetailModal, toggleFavorite}) => {
    return (
        <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
            <figure
                className="movie-item image-btn-container"
                onClick={() => showDetailModal()}>
                <img src={movie.getImage() || cover} alt={movie.title || "Movie Cover"} className="movie-img"/>

                <FavoriteButton isFavorite={isFavorite} toggledFavorite={() => toggleFavorite()}/>

            </figure>

        </div>
    );
}


MovieItem.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
}

const mapStateToProps = (state, ownProps) => {

    let thisMovieInStore = state.movieListReducer.movies.find( movie => {return movie.id === ownProps.movie.id});
    return{
        isFavorite: thisMovieInStore.favorited
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        showDetailModal: () => {
            dispatch(show(ownProps.movie))
        },
        toggleFavorite: () =>{
            dispatch(toggleLiked(ownProps.movie))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
