import React from 'react'
import {connect } from 'react-redux'

import MovieItem from './MovieItem'
import loadingSpinner from '../images/loading_spinner.gif'
import DropdownWrapper from "./DropdownWrapper";


const SimilarMovies = ({movies}) => {

    const renderMovies = () => {

        let moviesJSX = [];
        movies.map((movie) => {
            let movieJSX = <MovieItem key={movie.id} movie={movie}/>
            moviesJSX.push(movieJSX);
        })

        return moviesJSX

    }

    let moviesRendered = <div className="similar-movies container-fluid">
        <div className="row">
            {renderMovies()}
        </div>

    </div>

    let loadingRendered = <div className="loading w-100 d-flex justify-content-center align-items-center">
        <img src={loadingSpinner} alt="loading" className="img-fluid w-25 p-5"/>
    </div>


    return(
        <div>
            <DropdownWrapper title={"Similar Titles"}
                             children={moviesRendered }
            />


        </div>

    );
}

const mapStateToProps = state => {

    return {
        movies: state.movieListReducer.movies
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovies);