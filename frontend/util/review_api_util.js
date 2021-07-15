export const fetchReviews = () => (
    $.ajax({
        method: 'GET',
        url: `api/reviews`
    })
)

export const fetchReview = (reviewId) => (
    $.ajax({
        method: 'GET',
        url: `api/reviews/${reviewId}`
    })
)

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: 'api/reviews',
        data: { review }
    })
)

export const updateReview = review => (
    $.ajax({
        url: `/api/reviews/${review.id}`,
        method: `PATCH`,
        data: {review}
    })
)

export const deleteReview = reviewId => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: `DELETE`,
    })
)