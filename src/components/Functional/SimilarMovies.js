import {connect } from 'react-redux'
import SimilarMovies from "../Presentational/SimilarMovies";
import {loadSimilarMovies} from "../../actions/SimilarMovies";

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