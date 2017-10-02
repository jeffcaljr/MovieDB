import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Movie, {MockMovie} from '../models/movie'
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";


class MovieList extends Component {
    constructor(){
        super()

        this.toggleMovieDetail = this.toggleMovieDetail.bind(this)
        this.renderMovies = this.renderMovies.bind(this)
        this.playVideo = this.playVideo.bind(this)

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

    renderMovies = () => {

        if(this.props.movies.length > 0){
            let moviesJSX = [];
            this.props.movies.map((movie) => {
                let movieJSX = <MovieItem movie={movie} onClick={(movie) => this.toggleMovieDetail(movie)}/>
                moviesJSX.push(movieJSX);
            })

            return moviesJSX
        }
        else{
            return <div className="empty-movies-list">
                <h2 className="text-center text-white">No Movies Found</h2>
            </div>
        }

    }

    playVideo = (movie) => {
        // alert("playing movie " + movie.title)
        this.props.playVideo(movie)
    }

    render(){
        return (
            <div className={this.props.className + " " + ((this.state.showModal) ? " no-scroll-y " : " scroll-y ")}>
                {this.state.selectedMovie
                    ? <MovieDetails
                    movie={this.state.selectedMovie}
                    show={this.state.showModal}
                    onClick={this.toggleMovieDetail}
                    playVideo={(movie) => this.playVideo(movie)}/>
                : ""}

                <div className="row">
                    {this.renderMovies(this.props.movies)}

                </div>

            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.instanceOf(Movie)).isRequired,
    className: PropTypes.string,
    playVideo: PropTypes.func.isRequired
}

MovieList.defaultProps = {
    movies: [],
    className: ""
}

export default MovieList;