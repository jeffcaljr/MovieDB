import {combineReducers} from 'redux'

import reviewsReducer from './Reviews'
import similarMoviesReducer from './SimilarMovies'
import movieListReducer from './MovieList'
import videoPlayerReducer from './VideoPlayer'
import movieDetailModalReducer from './MovieDetailModal'
import errorReducer from './ErrorDisplay'
import mobileNavReducer from './MobileNav'

// const reducer = movieListReducer;
const reducer = combineReducers({
    movieListReducer,
    videoPlayerReducer,
    movieDetailModalReducer,
    mobileNavReducer,
    similarMoviesReducer,
    reviewsReducer,
    errorReducer
})

export default reducer;