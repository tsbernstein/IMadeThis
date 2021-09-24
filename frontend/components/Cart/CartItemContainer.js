import { connect } from "react-redux";
import CartItem from './CartItem'
import { fetchProduct } from '../../actions/product_actions'
import { deleteCart, updateCart } from "../../actions/cart_actions";

const mSTP = ( state, ownProps ) => {
    return ({
        product: state.entities.products[ownProps.cart.product_id]
    })
}

const mDTP = dispatch => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
        updateCart: (cart) => dispatch(updateCart(cart))
    }
}

export default connect(mSTP, mDTP)(CartItem);