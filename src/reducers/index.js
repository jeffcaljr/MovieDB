import {combineReducers} from 'redux'
import movieListReducer from './MovieList'
import videoPlayerReducer from './VideoPlayer'

// const reducer = movieListReducer;
const reducer = combineReducers({
    movieListReducer,
    videoPlayerReducer
})

export default reducer;