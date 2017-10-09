import {connect} from 'react-redux'

import {hide} from "../../actions/MovieDetailModal";
import {toggleLiked} from "../../actions/MovieList";
import {openVideo} from "../../actions/VideoPlayer";
import MovieDetails from "../Presentational/MovieDetails";

const mapStateToProps = state => {


    return {
        movie: state.movieDetailModalReducer.movie,
        showing: state.movieDetailModalReducer.showing,
        thisMovieInStore: state.movieListReducer.movies.find( movie => {return movie.id === state.movieDetailModalReducer.movie.id})
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playVideo: movie => {
            dispatch(openVideo(movie))
        },
        closeModal: () => {
            dispatch(hide())
        },
        toggleFavorite: (movie) =>{
            dispatch(toggleLiked(movie))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);