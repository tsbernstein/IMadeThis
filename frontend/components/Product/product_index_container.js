import ProductIndex from './product_index'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/product_actions'
import { fetchReviews } from '../../actions/review_actions'

const mSTP = state => {  
    return {
        products: Object.values(state.entities.products),
        reviews: Object.values(state.entities.reviews),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(mSTP, mDTP)(ProductIndex);