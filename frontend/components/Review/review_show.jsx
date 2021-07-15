import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { updateReview, deleteReview, clearReviews } from '../../actions/review_actions'

class ReviewShow extends React.Component {
    constructor(props){
        super(props)
    }

    deleteReviewButton = (reviewId) => (
        <button onClick={() => this.props.deleteReview(reviewId)}>Delete Review</button>
    )

    updateReviewButton = (reviewId) => (
        <button onClick={() => this.props.history.push(`/reviews/${reviewId}/edit`)}>Edit Review</button>
    )

    componentWillUnmount(){
        this.props.clearReviews();
    }

    render() {
        if(!this.props.reviews) return null;
        return (
            <div>
                {this.props.reviews.map((review, i) => (
                    <div className="reviews-show" key={review.id}>
                        {review.product_id === this.props.product.id ? review.body : null}
                        <br/>
                        {review.author_id === this.props.sessionId ? this.deleteReviewButton(review.id) : null}
                        <br/>
                        {review.author_id === this.props.sessionId ? this.updateReviewButton(review.id) : null}
                    </div>
                ))}
            </div>
        )
    }
}

const mSTP = state => ({
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id]
})

const mDTP = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review)),
    clearReviews: () => dispatch(clearReviews())
})

export default connect(mSTP, mDTP)(withRouter(ReviewShow));