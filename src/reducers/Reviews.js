import { LOADING_REVIEWS, LOAD_REVIEWS, REVIEWS_LOADED, loading, done} from "../actions/Reviews"
import {BASE_REVIEWS_URL_PREFIX, BASE_REVIEWS_URL_SUFFIX} from "../models/Review";
import {addError} from "../actions/ErrorDisplay";
import Review from "../models/Review";


const ReviewsReducer = (state = {movieID: undefined, loading: false, reviews: [], page: 1}, action) =>{

    switch(action.type){

        case LOAD_REVIEWS:
            //dont attempt to load reviews if action doesnt contain movie id, or the reviews
            //for the given id have already been loaded

            if(action.movieID == undefined || action.movieID === state.movieID){
                return state;
            }


            action.asyncDispatch(loading());

            let url = `${BASE_REVIEWS_URL_PREFIX}${action.movieID}${BASE_REVIEWS_URL_SUFFIX}${1}`;

            console.log("reviews url: " + url);

            fetch(url)
                .then( (res) => {return res.json()})
                .then( (res) => {
                    let reviewsJSON = res.results;
                    let reviews = []
                    reviewsJSON.map( (newReview) => {

                        let review= new Review(newReview.id, newReview.author, newReview.content, newReview.url)
                        reviews.push(review)
                    })
                    action.asyncDispatch(done(reviews, false))

                })
                .catch((err) => {
                    action.asyncDispatch(addError(err))
                })

            return Object.assign({}, state, {movieID: action.movieID, page: 1})


        case LOADING_REVIEWS:
            return Object.assign({}, state, {loading: true});


        case REVIEWS_LOADED:
            if(action.didReset){
                return Object.assign({}, state, {loading: false, reviews: state.reviews.concat(action.result)})
            }
            else{
                return Object.assign({}, state, {loading: false, reviews: action.result})
            }


        default:
            return state;
    }
}

export default ReviewsReducer;