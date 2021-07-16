import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_PRODUCT } from '../actions/product_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.currentUser.id]: action.currentUser})
        // case RECEIVE_PRODUCT:
        //     return Object.assign({}, state, action.reviewers);
        // case RECEIVE_REVIEW:
        //     return Object.assign({}, state, {[action.reviewer.id]: action.reviewer,});
        default:
            return state;
    }
}

export default usersReducer;