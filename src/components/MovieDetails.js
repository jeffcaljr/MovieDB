import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'
import FavoriteButton from "./FavoriteButton";
import DropdownWrapper from "./DropdownWrapper";
import {openVideo} from "../actions/VideoPlayer";

class MovieDetails extends Component {
    constructor(props) {
        super(props)

        this.renderGenres = this.renderGenres.bind(this)

        this.state = {
            favorite: props.movie.favorited
        }

        this.toggledFavorite = this.toggledFavorite.bind(this)
    }

    toggledFavorite = () => {
        this.setState({favorite: !this.state.favorite}, this.props.movie.toggleFavorited());
    }

    renderGenres = () => {

        let movieGenres = this.props.movie.getGenres();

        if (movieGenres.length > 0) {
            let genresJSX = [];
            movieGenres.map((genre) => {
                let genreJSX = <div className="genre">{genre.name}</div>
                genresJSX.push(genreJSX)
            })

            return (
                <DropdownWrapper title={"Genres"} children={genresJSX}/>
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



    render() {
        if (this.props.show === true) {
            return (
                <div className="movie-detail-container container">
                    <div className="movie-info">
                        <header className="row">
                            <div className="col-1">
                                <FavoriteButton isFavorite={this.state.favorite}
                                                toggledFavorite={this.toggledFavorite}/>
                            </div>
                            <div className="col-10 title-container text-center">
                                <h3 className="title text-center text-white font-weight-bold">{this.props.movie.title}</h3>
                            </div>

                            <div className="col-1 close-btn-container text-center">
                                <btn
                                    className=" btn btn-sm modal-close-button"
                                    onClick={(e) => {e.stopPropagation(); this.props.onClick}}>
                                    <i className="fa fa-close text-white fa-2x"></i>
                                </btn>
                            </div>


                        </header>


                        <div className="row movie-info-content">
                            <div className="col-md-4">
                                <figure className="movie-img-container image-btn-container">
                                    <img src={this.props.movie.getImage() || cover}
                                         alt={this.props.movie.title || "Movie Cover"} className="movie-info-image"/>
                                    <a
                                        href="#"
                                        className={"cover-button play-button "}
                                        onClick={this.props.playVideo(this.props.movie)}
                                    ><i className="fa fa-play fa-3x"></i></a>
                                </figure>
                                <div className="movie-rating clearfix">
                                    <div className="rating-left pull-left">
                                        <span className="rating-img"><i className="fa fa-star text-white"></i></span>
                                        <span className="rating-value text-white">{this.props.movie.voteAverage}</span>
                                    </div>

                                    <span
                                        className="rating-votes text-white pull-right">({this.props.movie.voteCount})</span>
                                </div>
                                <div className="realese-date">
                                    <p className="text-white">Released: {this.props.movie.releaseDate.substr(0, 4)}</p>
                                </div>
                            </div>
                            <div className="col-md-8">

                                <div className="tagline-container">
                                    <h5 className="tagline text-white text-center font-italic">{this.props.movie.tagline || ""}</h5>
                                </div>

                                <div className="overview-container">
                                    <p className="overview text-white">
                                        {this.props.movie.overview || "No overview available"}
                                    </p>
                                </div>

                                <div className="genres-container">
                                    {this.renderGenres()}
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
    movie: PropTypes.instanceOf(Movie).isRequired,
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,

}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        playVideo: () => {
            dispatch(openVideo(ownProps.movie))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);