import ProductIndexItem from './product_index_item'
import { connect } from 'react-redux'
import { fetchReview, clearReviews } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
    average: state.entities.products[ownProps.product.id].average,
    totalReviews: state.entities.products[ownProps.product.id].totalReviews
})

export default connect(mSTP, null)(ProductIndexItem);