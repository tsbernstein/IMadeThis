import * as APIUtil from '../util/review_api_util'

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
export const DELETE_REVIEW = 'DELETE_REVIEW'
export const REMOVE_ALL_REVIEWS = 'REMOVE_ALL_REVIEWS'

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const recieveReview = ({ review, author, rating }) => ({
    type: RECEIVE_REVIEW,
    review,
    author,
    rating
})

const destroyReview = reviewId => ({
    type: DELETE_REVIEW,
    reviewId
})

export const clearReviews = () => ({
    type: REMOVE_ALL_REVIEWS
})

export const fetchReviews = () => dispatch => (
    APIUtil.fetchReviews().then((reviews) => dispatch(receiveReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
    APIUtil.fetchReview(reviewId).then((reviewId) => dispatch(recieveReview(reviewId)))
)

export const createReview = review => dispatch => (
    APIUtil.createReview(review).then(review => dispatch(recieveReview(review)))
)

export const updateReview = review => dispatch => (
    APIUtil.updateReview(review).then(review => dispatch(recieveReview(review)))
)

export const deleteReview = reviewId => dispatch => (
    APIUtil.deleteReview(reviewId).then(() => dispatch(destroyReview(reviewId)))
)