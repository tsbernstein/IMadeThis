import { connect } from "react-redux";
import CartItem from './CartItem'
import { fetchProduct } from '../../actions/product_actions'

const mSTP = state => {
    return ({
        product: Object.values(state.entities.products)
    })
}

const mDTP = dispatch => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
    }
}

export default connect(mSTP, mDTP)(CartItem)