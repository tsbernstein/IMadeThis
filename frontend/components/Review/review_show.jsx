import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { updateReview, deleteReview, clearReviews } from '../../actions/review_actions'
import EditReviewForm from './edit_review_form_container'
import { openModal, closeModal } from '../../actions/modal_actions'
import ReactStars from "react-rating-stars-component";

class ReviewShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            reviews: this.props.reviews
        }
    }

    deleteReviewButton = (reviewId) => (
        <button className="submit-button" onClick={() => this.props.deleteReview(reviewId)}>Delete Review</button>
    )

    updateReviewButton = (review) => {
        const onClick = () => {
            this.props.openModal('editReview', review);
        }
        return (
        <button 
            className="submit-button" 
            onClick={
                () => {
                    onClick()
                }
            }
            >Edit Review
        </button>
        )
    }

    componentWillUnmount(){
        this.props.clearReviews();
    }

    render() {
        let reviewerName
        if (this.props.users.length){
            reviewerName = this.props.users[review.author_id].first_name;
        } else {
            reviewerName = null;
        }
        if(!this.props.reviews) return null;
        return (
            <div className="review-container">
                {this.props.reviews.map((review, i) => {
                    let reviewRating = review.rating;
                    return (
                    <div className="reviews-show" key={review.id}>
                        <div className="reviewer-name">{reviewerName}</div>
                        <ReactStars
                            value={reviewRating}
                            edit={false}
                            half={false}
                            color2='#000000'
                        ></ReactStars>
                        {review.product_id === this.props.product.id ? review.body : null}
                        <br/>
                        <div className="review-buttons">
                            {review.author_id === this.props.sessionId ? this.deleteReviewButton(review.id) : null}
                            <br/>
                            {review.author_id === this.props.sessionId ? this.updateReviewButton(review) : null}
                        </div>
                            <br />
                    </div>
                )})}
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
    clearReviews: () => dispatch(clearReviews()),
    openModal: (modal, modalInfo) => dispatch(openModal(modal, modalInfo)),
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(withRouter(ReviewShow));