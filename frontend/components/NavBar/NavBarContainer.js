import {connect} from 'react-redux';
import {login, logout} from '../../actions/session_actions';
import NavBar from './NavBar';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id]
})


const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(NavBar);