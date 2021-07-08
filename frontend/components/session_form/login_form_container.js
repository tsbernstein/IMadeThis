import {connect} from 'react-redux'
import React from 'react'
import {Link} from 'react-router-dom'
import {login, clearErrors} from '../../actions/session_actions'
import SessionForm from './session_form'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = ({errors}) => {
    return{
        errors: errors.sessionErrors,
        formType: 'Sign in',
        navLink: <Link to='/signup'>Log in</Link>
    }
}

const mDTP = dispatch => {
    return {
        processForm: (user) => dispatch(login(user)),
        login: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('signup'))}>
                Sign up
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors())
    }
}

export default connect(mSTP, mDTP)(SessionForm)