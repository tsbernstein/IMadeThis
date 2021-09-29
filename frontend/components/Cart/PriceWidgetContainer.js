import { connect } from "react-redux";
import { fetchProducts } from '../../actions/product_actions'
import { deleteCart } from "../../actions/cart_actions";
import PriceWidget from "./PriceWidget";

const mSTP = state => {
    return {
        products: state.entities.products
    }
}

const mDTP = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        deleteCart: (cartId) => dispatch(deleteCart(cartId))
    }
}

export default connect(mSTP, mDTP)(PriceWidget);