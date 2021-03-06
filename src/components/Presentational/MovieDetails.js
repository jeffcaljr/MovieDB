import React, {Component} from 'react'
import PropTypes from 'prop-types'


import SimilarMovies from '../Functional/SimilarMovies'
import Reviews from '../Functional/Reviews'
import MovieCover from "./MovieCover";
import ScrollingTextView from "./ScrollingTextView";

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
            movieGenres
                .sort( (genre1, genre2) => {
                    return genre1.name.toUpperCase() > genre2.name.toUpperCase()
                })
                .map((genre) => {
                    let genreJSX = <div key={genre.id} className="genre typeface-serif font-weight-bold ">{genre.name}</div>
                    genresJSX.push(genreJSX)
                })

            return (
                <div className="genres-container d-flex flex-wrap">
                    {genresJSX}
                </div>
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
            <Reviews movieID={this.props.movie.id}/>
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
                                    className=" btn btn-sm modal-close-button d-flex p-0 justify-content-center align-items-center"
                                    onClick={() => { this.props.closeModal()}}>
                                    <i className="fa fa-close fa-2x text-white w-100"></i>
                                </btn>
                            </div>

                            <div className="col-10 title-container text-center d-flex justify-content-center align-items-center">
                                <ScrollingTextView
                                    className="title text-center text-white font-weight-bold typeface-serif text-uppercase text-nowrap "
                                    text={this.props.movie.title}/>
                            </div>




                            <div className="col-1 text-center">
                                {/*<FavoriteButton isFavorite={this.props.thisMovieInStore.favorited}*/}
                                                {/*toggledFavorite={() => this.props.toggleFavorite(this.props.thisMovieInStore)}/>*/}
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


export default MovieDetails;