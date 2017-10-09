import React from 'react'
import PropTypes from 'prop-types'

import EmptyMoviesList from './EmptyMoviesList'
import MovieItem from "../Functional/MovieItem";



const MovieList = ({className, movies, modalIsShowing, loadNew}) =>{

    const renderMovies = () => {

        let moviesJSX = [];
        movies.map((movie) => {
            let movieJSX =
                <MovieItem
                    key={movie.id}
                    movie={movie}
                />
            moviesJSX.push(movieJSX);
        })

        return moviesJSX

    }


    return (
        <div className={className + " " + ((modalIsShowing) ? " no-scroll-y " : " scroll-y ")}>
            <div className={"movie-items-container-content container-fluid " + ((modalIsShowing) ? " no-scroll-y " : " scroll-y ")}>

                {
                    movies.length > 0
                    ? <div className="movie-list-content">
                            <div className="row">{renderMovies(movies)}</div>
                            <a
                                href="#"
                                className="btn text-white w-100 text-center typeface-serif text-uppercase"
                                onClick={(e) => { e.preventDefault(); loadNew()}}
                            >
                                Load More
                            </a>
                        </div>
                    : <EmptyMoviesList/>
                }


            </div>

        </div>
    );

}

MovieList.propTypes = {
    className: PropTypes.string,
}

MovieList.defaultProps = {
    movies: [],
    className: ""
}

export default MovieList