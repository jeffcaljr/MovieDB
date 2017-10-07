import {connect} from 'react-redux'
import {error, toggleLiked} from "../../actions/MovieList";
import MovieItem from "../Presentational/MovieItem";
import {show} from "../../actions/MovieDetailModal";

const mapStateToProps = (state, ownProps) => {

    let thisMovieInStore;
    if( ownProps.similarMovie === true){
        thisMovieInStore = state.similarMoviesReducer.similarMovies.find( movie => {return movie.id === ownProps.movie.id});
    }
    else{
        thisMovieInStore = state.movieListReducer.movies.find( movie => {return movie.id === ownProps.movie.id});
    }


    return{
        isFavorite: thisMovieInStore.favorited
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        showDetailModal: () => {
            dispatch(show(ownProps.movie))
        },
        toggleFavorite: () =>{
            dispatch(toggleLiked(ownProps.movie))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);