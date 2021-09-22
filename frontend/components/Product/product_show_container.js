import { connect } from 'react-redux'
import ProductShow from './product_show'
import { fetchProduct } from '../../actions/product_actions'
import { createCart } from '../../actions/cart_actions'

const mSTP = (state , ownProps) => {
    const currentUser = state.entities.users[state.session.id];
    return {
        product: state.entities.products[ownProps.match.params.productId],
        reviews: Object.values(state.entities.reviews),
        currentUser,
        carts: Object.values(state.entities.carts)
    }
}

const mDTP = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    createCart: (cart) => dispatch(createCart(cart)),
})

export default connect(mSTP, mDTP)(ProductShow);