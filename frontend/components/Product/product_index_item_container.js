import ProductIndexItem from './product_index_item'
import { connect } from 'react-redux'
import { fetchReview } from '../../actions/review_actions'

const mDTP = dispatch => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    }
}

export default connect(null, mDTP)(ProductIndexItem);