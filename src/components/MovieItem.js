import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/Movie'
import cover from '../images/default-movie-cover.jpg'
import FavoriteButton from "./FavoriteButton";
import {show} from "../actions/MovieDetailModal";
import {error, toggleLiked} from "../actions/MovieList";
import ScrollingTextView from "./ScrollingTextView";



const MovieItem = ({movie, similarMovie, isFavorite, toggleFavorite, showDetailModal}) => {


    return (
        <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
            <figure
                className="movie-item image-btn-container w-100"
                onClick={() => showDetailModal()}>
                <img src={ movie.getImage() || cover} alt={movie.title || "Movie Cover"} className="movie-img"/>

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

const mapStateToProps = (state, ownProps) => {

    let thisMovieInStore;
    if( ownProps.similarMovie === true){
        thisMovieInStore = state.similarMoviesReducer.similarMovies.find( movie => {return movie.id === ownProps.movie.id});
    }
    else{
        thisMovieInStore = state.movieListReducer.movies.find( movie => {return movie.id === ownProps.movie.id});
    }


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
