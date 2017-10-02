import {combineReducers} from 'redux'

import movieListReducer from './MovieList'
import videoPlayerReducer from './VideoPlayer'
import movieDetailModalReducer from './MovieDetailModal'

// const reducer = movieListReducer;
const reducer = combineReducers({
    movieListReducer,
    videoPlayerReducer,
    movieDetailModalReducer
})

export default reducer;