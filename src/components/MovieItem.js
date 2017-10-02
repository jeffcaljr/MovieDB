import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";
import {show} from "../actions/MovieDetailModal";
import {toggleLiked} from "../actions/MovieList";



class MovieItem extends Component{
    constructor(props){
        super(props)

        this.state = {
            favorite: props.movie.favorited
        }

        this.toggledFavorite = this.toggledFavorite.bind(this)
    }

    toggledFavorite = () =>{
        this.setState({favorite: !this.state.favorite}, this.props.movie.toggleFavorited());
    }

    render(){
        return (
            <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
                <figure
                    className="movie-item image-btn-container"
                    onClick={() => this.props.openDetailModal()}>
                    <img src={this.props.movie.getImage() || cover} alt={this.props.movie.title || "Movie Cover"} className="movie-img"/>

                    <FavoriteButton isFavorite={this.props.isFavorite} toggledFavorite={() => this.props.toggleFavorite()}/>

                </figure>

            </div>
        );
    }
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

        openDetailModal: () => {
            dispatch(show(ownProps.movie))
        },
        toggleFavorite: () =>{
            dispatch(toggleLiked(ownProps.movie))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
