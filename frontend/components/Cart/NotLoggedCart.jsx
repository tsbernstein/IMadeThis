import React from 'react'
import {connect} from 'react-redux'
import { openModal, closeModal } from '../../actions/modal_actions'

const NotLoggedCart = (props) => {
    return (
        <div className='not-logged-modal-container'>
            <div className='not-logged-modal-top'>
                <span onClick={props.closeModal} className='close-x'>X</span>
            </div>
            <h3 className="not-logged-modal">
                Sign in or Sign up
            </h3>
            <h3>to view cart</h3>
        </div>
    )
}

const mDTP = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
})

export default connect(null, mDTP)(NotLoggedCart);