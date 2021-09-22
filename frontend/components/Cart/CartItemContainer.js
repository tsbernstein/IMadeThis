import { connect } from "react-redux";
import CartItem from './CartItem'
import { fetchProduct } from '../../actions/product_actions'
import { deleteCart } from "../../actions/cart_actions";

const mSTP = ( state, ownProps ) => {
    return ({
        product: state.entities.products[ownProps.cartItemId]
    })
}

const mDTP = dispatch => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id)),
        deleteCart: (cartId) => dispatch(deleteCart(cartId)),
    }
}

export default connect(mSTP, mDTP)(CartItem);