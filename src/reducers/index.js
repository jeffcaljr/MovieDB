import {combineReducers} from 'redux'
import movieListReducer from './MovieList'

let reducer = movieListReducer;
// let reducer = (state = {value: ''}, action) => {
//
//     switch(action.type){
//         case 'TEST':
//             return Object.assign({}, state, {value: "HELLO WORLD"})
//         default:
//             return state
//     }
// }

export default reducer;