import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { openModal, closeModal } from '../../actions/modal_actions'
import { createReview } from '../../actions/review_actions'
import { fetchReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => ({
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    review: {
        rating: 5,
        body: '',
        product_id: ownProps.productId,
    }
})

const mDTP = dispatch => ({
    action: review => dispatch(createReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchReview: review => dispatch(fetchReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)