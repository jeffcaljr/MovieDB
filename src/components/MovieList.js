import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import MovieItem from "./MovieItem";
import {loadMore} from "../actions/MovieList";


const MovieList = ({className, movies, modalIsShowing, loadNew}) =>{

    const renderMovies = () => {

        if(movies.length > 0){
            let moviesJSX = [];
            movies.map((movie) => {
                let movieJSX = <MovieItem movie={movie}/>
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


    return (
        <div className={className + " " + ((modalIsShowing) ? " no-scroll-y " : " scroll-y ")}>
            <div className={"movie-items-container-content container-fluid" + ((modalIsShowing) ? " no-scroll-y " : " scroll-y ")}>

                <div className="row">
                    {renderMovies(movies)}
                </div>

                {
                    movies.length > 0
                    ?   <a href="#" className="btn text-white w-100 text-center" onClick={(e) => { e.preventDefault(); loadNew()}}>Load More</a>
                    : <h1 className="text-white text-center w-100">Not Working!</h1>
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

const mapStateToProps = state => {
    return {
        movies: state.movieListReducer.movies,
        modalIsShowing: state.movieDetailModalReducer.showing
    }
}

const mapDispatchToProps = dispatch => {
    return{
        loadNew: () => {
            dispatch(loadMore())
        }
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(MovieList);