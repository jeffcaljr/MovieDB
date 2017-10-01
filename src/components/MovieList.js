import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {MockMovie} from '../models/movie'
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";


class MovieList extends Component {
    constructor(){
        super()

        this.toggleMovieDetail = this.toggleMovieDetail.bind(this)

        this.state = {
            showModal: false,
            selectedMovie: null
        }
    }

    toggleMovieDetail = (movie) => {
        let isShown = !this.state.showModal;
        let movieToShow = (isShown) ? movie : null
        this.setState({showModal: isShown, selectedMovie: movieToShow})
    }

    render(){
        return (
            <div className={this.props.className + " " + ((this.state.showModal) ? " no-scroll " : "scroll-y ")}>
                <MovieDetails
                    movie={this.state.selectedMovie}
                    show={this.state.showModal}
                    onClick={this.toggleMovieDetail}/>

                <div className="row">
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                    <MovieItem movie={MockMovie} onClick={(movie) => this.toggleMovieDetail(movie)}/>





                </div>

            </div>
        );
    }
}

MovieList.propTypes = {
    className: PropTypes.string
}

MovieList.defaultProps = {
    className: ""
}

export default MovieList;