import { connect } from "react-redux";
import Cart from './Cart'
import { updateCart, fetchCart, fetchCarts } from "../../actions/cart_actions";
import { fetchProduct } from '../../actions/product_actions'

const mSTP = state => {
    const currentUser = state.entities.users[state.session.id];
    return {
        carts: Object.values(state.entities.carts),
    }
}

const mDTP = dispatch => {
    return {
        updateCart: cart => dispatch(updateCart(cart)),
        fetchCart: cartId => dispatch(fetchCart(cartId)),
        fetchCarts: () => dispatch(fetchCarts()),
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
    }
}

export default connect(mSTP, mDTP)(Cart)