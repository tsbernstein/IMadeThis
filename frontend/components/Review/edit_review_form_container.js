import { connect } from 'react-redux'
import ReviewForm from './review_form'
import { openModal, closeModal } from '../../actions/modal_actions'
import { updateReview, fetchReview } from '../../actions/review_actions'

const mSTP = (state, ownProps) => {
    return {
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    review: state.entities.reviews[ownProps.match.params.reviewId]}
}

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchReview: review => dispatch(fetchReview(review))
})

export default connect(mSTP, mDTP)(ReviewForm)