import {ADD_ERROR, REMOVE_ERROR} from '../actions/ErrorDisplay'


const ErrorReducer = (state = {errors: []}, action) => {
    switch(action.type){
        case ADD_ERROR:
            if(action.error && action.error.message != ""){

                let errorsCopy = state.errors.slice();
                errorsCopy.unshift(action.error)
                return Object.assign({}, state, {errors: errorsCopy})
            }
            else{
                return state;
            }


        case REMOVE_ERROR:

            if(action.index >= 0 && action.index < state.errors.length){
                let errorsCopy = state.errors.slice()
                errorsCopy.splice(action.index, 1)

                return Object.assign({}, state, {errors: errorsCopy})

            }
            else{
                return state
            }


        default:
            return state;
    }
}

export default ErrorReducer;