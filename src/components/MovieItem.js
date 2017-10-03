import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";
import {show} from "../actions/MovieDetailModal";
import {error, toggleLiked} from "../actions/MovieList";



class MovieItem extends Component{
    constructor(){
        super()

        this.hasOverflow= this.hasOverflow.bind(this)

        this.state = {
            hasOverflow: false
        }
    }

    hasOverflow = () =>{
        return this.scrollLeft.offsetWidth < this.scrollText.offsetWidth
    }

    render(){
        return (
            <div className="movie-item-container-single col-6 col-sm-3 col-md-4 col-lg-3 col-xl-2">
                <figure
                    className="movie-item image-btn-container w-100"
                    onClick={() => this.props.showDetailModal()}>
                    <img src={this.props.movie.getImage() || cover} alt={this.props.movie.title || "Movie Cover"} className="movie-img"/>

                    <div className="text-white text-center movie-item-details">
                        <FavoriteButton isFavorite={this.props.isFavorite} toggledFavorite={() => this.props.toggleFavorite()}/>
                        <div className={"scroll-left"}
                             ref={(scrollLeft) => this.scrollLeft = scrollLeft}>
                            <p className={"movie-item-details-title typeface-sans-serif" + (this.state.hasOverflow ? " scrolling-title w-100 " : " no-scrolling-title ")} ref={(scrollText) => this.scrollText = scrollText}>{this.props.movie.title}</p>

                        </div>
                    </div>

                </figure>


            </div>
        );
    }

    componentDidMount(){

        this.setState({ hasOverflow: this.hasOverflow()}, () => {console.log("setting state")})
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

        showDetailModal: () => {
            dispatch(show(ownProps.movie))
        },
        toggleFavorite: () =>{
            dispatch(toggleLiked(ownProps.movie))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
