import {connect } from 'react-redux'
import {loadReviews} from "../../actions/Reviews";
import Reviews from "../Presentational/Reviews";

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