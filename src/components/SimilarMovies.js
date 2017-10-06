import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'

import MovieItem from './MovieItem'
import loadingSpinner from '../images/loading_spinner.gif'
import DropdownWrapper from "./DropdownWrapper";
import {loadSimilarMovies} from "../actions/SimilarMovies";


class SimilarMovies extends Component{
    constructor(){
        super()
        this.renderMovies = this.renderMovies.bind(this)
    }

    renderMovies = () => {

        let moviesJSX = [];
        this.props.similarMovies.map((movie) => {
            let movieJSX =
                <MovieItem
                    key={movie.id}
                    similarMovie={true}
                    movie={movie}/>
            moviesJSX.push(movieJSX);
        })

        return moviesJSX

    }


    render(){
        return(
            <div>
                <DropdownWrapper title={"Similar Titles"}
                                 children={( (this.props.loading)
                                         ? <div className="loading w-100 d-flex justify-content-center align-items-center">
                                             <img src={loadingSpinner} alt="loading" className="img-fluid w-25 p-2"/>
                                         </div>
                                         : (
                                             this.props.similarMovies.length < 1
                                                 ? <div className="w-100 d-flex justify-content-center align-items-center p-5">
                                                     <h3 className="text-muted">No similar movies found</h3>
                                                 </div>
                                                 :  <div className="similar-movies container-fluid">
                                                     <div className="row">
                                                         {this.renderMovies()}
                                                     </div>

                                                 </div>
                                         )
                                 )}
                                 onExpand={() => this.props.loadSimilarMovies()}
                />


            </div>

        );
    }

    componentDidMount(){
        // ReactDOM.findDOMNode(this).scrollTop = 0
        window.scrollTo(0,0)
    }
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