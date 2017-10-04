import React from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'

import MovieItem from './MovieItem'
import loadingSpinner from '../images/loading_spinner.gif'
import DropdownWrapper from "./DropdownWrapper";
import {loadSimilarMovies} from "../actions/SimilarMovies";


const SimilarMovies = ({similarMovies, loading, loadSimilarMovies}) => {

    const renderMovies = () => {

        let moviesJSX = [];
        similarMovies.map((movie) => {
            let movieJSX =
                <MovieItem
                    key={movie.id}
                    similarMovie={true}
                    movie={movie}/>
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
        <img src={loadingSpinner} alt="loading" className="img-fluid w-25 p-2"/>
    </div>


    let noSimilarMoviesDisplay = <div className="w-100 d-flex justify-content-center align-items-center p-5">
        <h3 className="text-muted">No Similar movies found</h3>
    </div>

    let children;

    if(loading){
        children = loadingRendered;
    }
    else if(similarMovies.length < 1){
        children = noSimilarMoviesDisplay;
    }
    else{
        children = moviesRendered
    }


    return(
        <div>
            <DropdownWrapper title={"Similar Titles"}
                             children={children}
                             onExpand={() => loadSimilarMovies()}
            />


        </div>

    );
}

SimilarMovies.propTypes = {
    movieID: PropTypes.number.isRequired
}

const mapStateToProps = state => {

    return {
        similarMovies: state.similarMoviesReducer.similarMovies,
        loading: state.similarMoviesReducer.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadSimilarMovies: () => {
            dispatch(loadSimilarMovies(ownProps.movieID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimilarMovies);