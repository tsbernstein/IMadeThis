import ProductIndex from './product_index'
import { connect } from 'react-redux'
import { fetchProducts } from '../../actions/product_actions'

const mSTP = state => {  
    return {
        products: Object.values(state.entities.products),
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    }
}

export default connect(mSTP, mDTP)(ProductIndex);