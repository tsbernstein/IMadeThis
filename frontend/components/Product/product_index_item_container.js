import ProductIndexItem from './product_index_item'
import { connect } from 'react-redux'
import { fetchReview } from '../../actions/review_actions'

const mSTP = state => ({
    reviews: Object.values(state.entities.reviews)
})

const mDTP = dispatch => {
    return {
        fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    }
}

export default connect(mSTP, mDTP)(ProductIndexItem);