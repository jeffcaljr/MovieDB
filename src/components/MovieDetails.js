import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import SimilarMovies from './SimilarMovies'
import Reviews from './Reviews'
import FavoriteButton from "./FavoriteButton";
import DropdownWrapper from "./DropdownWrapper";
import {openVideo} from "../actions/VideoPlayer";
import MovieCover from "./MovieCover";
import {hide} from "../actions/MovieDetailModal";
import {toggleLiked} from "../actions/MovieList";

class MovieDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favorite: props.movie.favorited
        }

        this.renderGenres = this.renderGenres.bind(this);
        this.renderSimilarMovies = this.renderSimilarMovies.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
        this.toggledFavorite = this.toggledFavorite.bind(this);
    }

    toggledFavorite = () => {
        this.setState({favorite: !this.state.favorite}, this.props.movie.toggleFavorited());
    }

    renderGenres = () => {

        let movieGenres = this.props.movie.getGenres();

        if (movieGenres.length > 0) {
            let genresJSX = [];
            movieGenres.map((genre) => {
                let genreJSX = <div className="genre typeface-serif font-weight-bold">{genre.name}</div>
                genresJSX.push(genreJSX)
            })

            return (
                <DropdownWrapper title={"Genres"} children={genresJSX} expandedDefault={true}/>
            );
        }
        else {
            //No genres found

            let emptyGenres = <p className="text-muted">No genres found.</p>

            return (
                <DropdownWrapper title={"Genres"} children={emptyGenres}/>
            );
        }
    }

    renderSimilarMovies = () => {
        return (
            <SimilarMovies movieID={this.props.movie.id}/>
        );
    }

    renderReviews = () => {
        return(
            <Reviews/>
        );
    }



    render() {
        if (this.props.showing) {
            return (
                <div className={this.props.className + "movie-detail-container container" + " " +  ((this.props.showing ? " modal-showing " : " modal-hidden "))}>
                    <div className="movie-info">
                        <header className="row movie-detail-header">

                            <div className="col-1 close-btn-container text-center">
                                <btn
                                    className=" btn btn-sm modal-close-button"
                                    onClick={() => { this.props.closeModal()}}>
                                    <i className="fa fa-close fa-2x text-white"></i>
                                </btn>
                            </div>

                            <div className="col-10 title-container text-center">
                                <h3 className="title text-center text-white font-weight-bold typeface-serif text-uppercase">{this.props.movie.title}</h3>
                            </div>

                            <div className="col-1 text-center">
                                {/*<FavoriteButton isFavorite={this.props.thisMovieInStore.favorited}*/}
                                                // toggledFavorite={() => this.props.toggleFavorite(this.props.thisMovieInStore)}/>
                            </div>




                        </header>


                        <div className="row movie-info-content">
                            <div className="col-md-4">
                                <MovieCover movie={this.props.movie} playVideo={(movie) => this.props.playVideo(movie)}/>
                                <div className="movie-rating clearfix">
                                    <div className="rating-left pull-left">
                                        <span className="rating-img"><i className="fa fa-star text-white"></i></span>
                                        <span className="rating-value text-white typeface-serif">{this.props.movie.voteAverage}</span>
                                    </div>

                                    <span
                                        className="rating-votes text-white pull-right typeface-sans-serif text-secondary">({this.props.movie.voteCount})</span>
                                </div>
                                <div className="realese-date">
                                    <p className="text-white"> <span className="typeface-serif text-uppercase small text-info ">Released:</span> {this.props.movie.releaseDate.substr(0, 4)}</p>
                                </div>
                            </div>
                            <div className="col-md-8">

                                <div className="tagline-container">
                                    <h5 className="tagline text-white text-center font-italic typeface-sans-serif">{this.props.movie.tagline || ""}</h5>
                                </div>

                                <div className="overview-container">
                                    <p className="overview text-white typeface-sans-serif">
                                        {this.props.movie.overview || "No overview available"}
                                    </p>
                                </div>

                                <div className="genres-container">
                                    {this.renderGenres()}
                                </div>
                                <div className="similar-movies-container">
                                    {this.renderSimilarMovies()}
                                </div>
                                <div className="reviews-container">
                                    {this.renderReviews()}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }
        else {
            return null;
        }
    }

}

MovieDetails.propTypes = {
    className: PropTypes.string
}

MovieDetails.defaultProps = {
    className: ""
}



const mapStateToProps = state => {


    return {
        movie: state.movieDetailModalReducer.movie,
        showing: state.movieDetailModalReducer.showing,
        thisMovieInStore: state.movieListReducer.movies.find( movie => {return movie.id === state.movieDetailModalReducer.movie.id})
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        playVideo: movie => {
            dispatch(openVideo(movie))
        },
        closeModal: () => {
            dispatch(hide())
        },
        toggleFavorite: (movie) =>{
            dispatch(toggleLiked(movie))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);