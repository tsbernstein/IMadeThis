import React from 'react'
import {connect} from 'react-redux'
import { openModal } from '../../actions/modal_actions'

const NotLoggedReview = (props) => {
    return (
        <div>
            <div onClick={() => this.props.openModal('login')}>
                Sign in or Sign up
            </div>
            <p>to leave a review</p>
        </div>
    )
}

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal))
})

export default connect(null, mDTP)(NotLoggedReview);