import React from 'react'
import PropTypes from 'prop-types'

import Movie from '../models/movie'
import cover from '../images/default_movie_cover.jpg'

const MovieDetails = ({movie, show, onClick}) => {

    const renderGenres = () => {

        if(movie.genres.length > 0){
            let genres = [];
            let sortedGenres = movie.genres.sort((first, second) => { first < second})
            sortedGenres.map((genre) => {
                let genreJSX = <div className="genre">{genre.name}</div>
                genres.push(genreJSX)
            })

            return genres
        }
        else{
            //MOCK DATA
            return (
                <div className="genres-container">
                    <div className="genre">Drama</div>
                    <div className="genre">Comedy</div>
                    <div className="genre">Action</div>
                    <div className="genre">Horror</div>
                    <div className="genre">Documentary</div>
                    <div className="genre">Drama</div>
                    <div className="genre">Comedy</div>
                    <div className="genre">Action</div>
                    <div className="genre">Horror</div>
                    <div className="genre">Documentary</div>
                    <div className="genre">Drama</div>
                    <div className="genre">Comedy</div>
                    <div className="genre">Action</div>
                    <div className="genre">Horror</div>
                    <div className="genre">Documentary</div>
                    <div className="genre">Drama</div>
                    <div className="genre">Comedy</div>
                    <div className="genre">Action</div>
                    <div className="genre">Horror</div>
                    <div className="genre">Documentary</div>
                    <div className="genre">Drama</div>
                    <div className="genre">Comedy</div>
                    <div className="genre">Action</div>
                    <div className="genre">Horror</div>
                    <div className="genre">Documentary</div>

                </div>
            );
        }
    }


    if(show === true){
        return (
            <div className="movie-detail-container container">
                <div className="movie-info">
                    <header className="row">
                        <div className="col-11 title-container text-center">
                            <h3 className="title text-center text-white font-weight-bold">{movie.title}</h3>
                        </div>

                        <div className="col-1 close-btn-container text-center">
                            <btn
                                className=" btn btn-sm modal-close-button"
                                onClick={onClick}>
                                <i className="fa fa-close text-white fa-2x"></i>
                            </btn>
                        </div>


                    </header>


                    <div className="row movie-info-content">
                        <div className="col-md-4">
                            <figure className="movie-img-container image-btn-container">
                                <img src={movie.getImage() || cover} alt={movie.title || "Movie Cover"} className="movie-info-image"/>
                                <a
                                    href="#"
                                    className={"cover-button play-button " + ( !movie.hasVideo ? " hidden" : "")}
                                    ><i className="fa fa-play fa-3x"></i></a>
                            </figure>
                            <div className="movie-rating clearfix">
                                <span className="rating-left pull-left">
                                    <span className="rating-img"><i className="fa fa-star text-white"></i></span>
                                    <span className="rating-value text-white">{movie.voteAverage}</span>
                                </span>
                                <span className="rating-votes text-white pull-right">({movie.voteCount})</span>
                            </div>
                            <div className="realese-date">
                                <p className="text-white text-center">Released: {movie.releaseDate}</p>
                            </div>
                        </div>
                        <div className="col-md-8">

                            <div className="tagline-container">
                                <h4 className="tagline text-white text-center font-italic">{movie.tagline || "No tagline available"}</h4>
                            </div>

                            <div className="overview-container">
                                <p className="overview text-white">
                                    {movie.overview || "No overview available"}
                                </p>
                            </div>

                            <div className="genres-container">
                                {renderGenres()}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
    else{
        return null;
    }

}


MovieDetails.propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,
    show: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired

}

export default MovieDetails;