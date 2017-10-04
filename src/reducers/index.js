import {combineReducers} from 'redux'

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
    errorReducer
})

export default reducer;