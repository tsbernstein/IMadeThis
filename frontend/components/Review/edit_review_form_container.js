import { connect } from 'react-redux'
import EditReviewForm from './edit_review_form'
import { openModal, closeModal } from '../../actions/modal_actions'
import { updateReview, fetchReview } from '../../actions/review_actions'

const mSTP = (state) => {
    return {
        sessionId: state.session.id,
        currentUser: state.entities.users[state.session.id],
        review: state.ui.modalInfo
    }
}

const mDTP = dispatch => ({
    action: review => dispatch(updateReview(review)),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    fetchReview: review => dispatch(fetchReview(review))
})

export default connect(mSTP, mDTP)(EditReviewForm)