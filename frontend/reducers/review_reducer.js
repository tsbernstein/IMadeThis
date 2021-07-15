import { RECEIVE_REVIEW, RECEIVE_REVIEWS, DELETE_REVIEW, REMOVE_ALL_REVIEWS } from "../actions/review_actions";
import { RECEIVE_PRODUCT } from '../actions/product_actions'

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PRODUCT:
            return Object.assign({}, state, action.reviews)
        case RECEIVE_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            return Object.assign({}, state, {[action.review.id]: action.review})
        case DELETE_REVIEW:
            const nextState = Object.assign({}, state)
            delete nextState[action.reviewId]
            return nextState
        case REMOVE_ALL_REVIEWS:
            return {};
        default:
            return state;
    }
}

export default reviewsReducer;