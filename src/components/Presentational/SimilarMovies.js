import React, {Component} from 'react'

import PropTypes from 'prop-types'

import MovieItem from '../Functional/MovieItem'
import loadingSpinner from '../../images/loading_spinner.gif'
import DropdownWrapper from "../DropdownWrapper";
import {loadSimilarMovies} from "../../actions/SimilarMovies";


class SimilarMovies extends Component{

    constructor(){
        super();
        this.renderMovies = this.renderMovies.bind(this);
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
        });

        return moviesJSX

    }


    componentDidMount(){
        window.scrollTo(0,0);
    }


    render(){
        return(
            <div>
                <DropdownWrapper title={"Similar Titles"}
                                 onExpand={() => this.props.loadSimilarMovies()}
                                 children={ ( (this.props.loading)
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

                                                 {/*<div className="text-center w-100">*/}
                                                     {/*<u>*/}
                                                         {/*<a*/}
                                                             {/*href="#"*/}
                                                             {/*className="small text-white text-center w-100 font-italic underline">*/}
                                                             {/*See More*/}
                                                         {/*</a>*/}
                                                     {/*</u>*/}

                                                 {/*</div>*/}

                                                 </div>
                                         )
                                 )}
                />
            </div>

        );
    }
}

SimilarMovies.propTypes = {
    movieID: PropTypes.number.isRequired
}

export default SimilarMovies;