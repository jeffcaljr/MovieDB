import {connect} from 'react-redux'

import {TRENDING_GENRE} from "../../constants/genres";
import {load} from "../../actions/MovieList";

import App from "../Presentational/App";

const mapStateToProps = state => {
    return {
        videoPlayerOpen: state.videoPlayerReducer.videoPlayerIsOpen,
        modalIsShowing: state.movieDetailModalReducer.showing,
        errors: state.errorReducer.errors
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadDefaultMovies: genreID => {
            dispatch(load(TRENDING_GENRE.id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);