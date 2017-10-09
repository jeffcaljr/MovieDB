import {connect} from 'react-redux'
import {loadMore} from "../../actions/MovieList";

import MovieList from "../Presentational/MovieList";

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