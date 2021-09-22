import { RECIEVE_CART, RECIEVE_CARTS, DELETE_CART } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECIEVE_CARTS:
            return action.carts;
        case RECIEVE_CART:
            return Object.assign({}, state, {[action.cart.id]: action.cart});
        case DELETE_CART:
            const nextState = Object.assign({}, state);
            delete nextState[action.cart.cart.id];
            return nextState;
        default:
            return state;
    }
}

export default cartReducer;