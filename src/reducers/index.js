import {combineReducers} from 'redux'

import movieListReducer from './MovieList'
import videoPlayerReducer from './VideoPlayer'
import movieDetailModalReducer from './MovieDetailModal'
import errorReducer from './ErrorDisplay'

// const reducer = movieListReducer;
const reducer = combineReducers({
    movieListReducer,
    videoPlayerReducer,
    movieDetailModalReducer,
    errorReducer
})

export default reducer;