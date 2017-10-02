import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Movie, {MockMovie} from '../models/movie'
import MovieItem from "./MovieItem";
import MovieDetails from "./MovieDetails";
import {loadMore} from "../actions/MovieList";


class MovieList extends Component {
    constructor({movies, status}){
        super()

        this.toggleMovieDetail = this.toggleMovieDetail.bind(this)
        this.renderMovies = this.renderMovies.bind(this)

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


    render(){
        return (
            <div className={this.props.className + " " + ((this.state.showModal) ? " no-scroll-y " : " scroll-y ")}>
                <div className="movie-items-container-content container-fluid">
                    {this.state.selectedMovie
                        ? <MovieDetails
                            movie={this.state.selectedMovie}
                            show={this.state.showModal}
                            onClick={this.toggleMovieDetail}/>
                        : null}

                    <div className="row">
                        {this.renderMovies(this.props.movies)}
                    </div>

                    {this.props.movies.length > 0
                        ?   <a href="#" className="btn text-white w-100 text-center" onClick={() => { this.props.loadMore()}}>Load More</a>
                        : ""}
                </div>

            </div>
        );
    }

}

MovieList.propTypes = {
    className: PropTypes.string,
    loadMore: PropTypes.func
}

MovieList.defaultProps = {
    movies: [],
    className: ""
}

const mapStateToProps = state => {
    return {
        movies: state.movieListReducer.movies,
        status: state.movieListReducer.status
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadMore: () =>{
            dispatch(loadMore())
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MovieList);