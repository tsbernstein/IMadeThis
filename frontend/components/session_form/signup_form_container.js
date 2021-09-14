import {connect} from 'react-redux'
import React from 'react'
import {signup, clearErrors, login} from '../../actions/session_actions'
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions'
import { createCart } from '../../actions/cart_actions'

const mSTP = ({errors}) => {
    return{
        errors: errors.sessionErrors,
        formType: 'Sign up',
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(signup(user)),
        login: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Log in
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
        createCart: cart => dispatch(createCart(cart))
    }
}

export default connect(mSTP, mDTP)(SessionForm)