import { RECIEVE_CART } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECIEVE_CART:
            return Object.assign({}, state, {[action.cart.id]: action.cart});
        default:
            return state;
    }
}

export default cartReducer;