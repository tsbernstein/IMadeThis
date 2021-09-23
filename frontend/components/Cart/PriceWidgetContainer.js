import { connect } from "react-redux";
import { fetchProduct } from '../../actions/product_actions'
import PriceWidget from "./PriceWidget";

const mSTP = ( state, ownProps ) => {
    return {
        // products: Object.values(state.entites.products)
    }
}

const mDTP = dispatch => {
    return {
        fetchProduct: (product_id) => dispatch(fetchProduct(product_id))
    }
}

export default connect(mSTP, mDTP)(PriceWidget);