import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { updateReview, deleteReview, clearReviews } from '../../actions/review_actions'
import { BsStarFill } from 'react-icons/bs'

class ReviewShow extends React.Component {
    constructor(props){
        super(props)
    }

    deleteReviewButton = (reviewId) => (
        <button className="submit-button" onClick={() => this.props.deleteReview(reviewId)}>Delete Review</button>
    )

    updateReviewButton = (reviewId) => (
        <button className="submit-button" onClick={() => this.props.history.push(`/reviews/${reviewId}/edit`)}>Edit Review</button>
    )

    componentWillUnmount(){
        this.props.clearReviews();
    }

    render() {
        if(!this.props.reviews) return null;
        return (
            <div className="review-container">
                {this.props.reviews.map((review, i) => (
                    <div className="reviews-show" key={review.id}>
                        {/* <div className="reviewer-name">{this.props.users[review.author_id].first_name}</div> */}
                        <div className="review-rating">{review.rating}<BsStarFill className="review-star"/></div>
                        {review.product_id === this.props.product.id ? review.body : null}
                        <br/>
                        <div className="review-buttons">
                            {review.author_id === this.props.sessionId ? this.deleteReviewButton(review.id) : null}
                            <br/>
                            {review.author_id === this.props.sessionId ? this.updateReviewButton(review.id) : null}
                        </div>
                            <br />
                    </div>
                ))}
            </div>
        )
    }
}

const mSTP = state => ({
    sessionId: state.session.id,
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users
})

const mDTP = dispatch => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    updateReview: review => dispatch(updateReview(review)),
    clearReviews: () => dispatch(clearReviews())
})

export default connect(mSTP, mDTP)(withRouter(ReviewShow));