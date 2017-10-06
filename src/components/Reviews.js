import React from 'react'
import {connect } from 'react-redux'
import PropTypes from 'prop-types'

import loadingSpinner from '../images/loading_spinner.gif'
import DropdownWrapper from "./DropdownWrapper";
import {loadReviews} from "../actions/Reviews";
import ReviewItem from "./ReviewItem";


const Reviews= ({movieID, reviews, loading, loadReviews}) => {

    const renderReviews = () => {

        let reviewsJSX = [];

        //TODO: Currently only loading first 5 reviews, should proably add "see all" functionality
        reviews.slice(0,5).map((review) => {

            let reviewJSX = <ReviewItem
                key={review.id}
                reviewID={review.id}
                author={review.author}
                content={review.content}
                url={review.url}/>
            reviewsJSX.push(reviewJSX);
        })

        return reviewsJSX;

    }


    return(
        <div>
            <DropdownWrapper title={"Reviews"}
                             children={( (loading)
                                     ? <div className="loading w-100 d-flex justify-content-center align-items-center">
                                         <img src={loadingSpinner} alt="loading" className="img-fluid w-25 p-2"/>
                                     </div>
                                     : (
                                         reviews.length < 1
                                             ? <div className="w-100 d-flex justify-content-center align-items-center p-5">
                                                 <h3 className="text-muted">No reviews found</h3>
                                             </div>
                                             :  <div className="similar-movies container-fluid">
                                                 <div className="row w-100">
                                                     {renderReviews()}

                                                     <div className="text-center w-100">
                                                         <u>
                                                             <a
                                                                 href="#"
                                                                 className=" small text-white text-center w-100 font-italic">
                                                                 See More
                                                             </a>
                                                         </u>
                                                     </div>


                                                 </div>


                                             </div>
                                     )
                             )}
                             onExpand={() => loadReviews()}
            />


        </div>

    );
}


Reviews.propTypes = {
    movieID: PropTypes.number.isRequired
}

const mapStateToProps = state => {

    return {
        reviews: state.reviewsReducer.reviews,
        loading: state.reviewsReducer.loading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadReviews: () => {
            dispatch(loadReviews((ownProps.movieID)))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Reviews);