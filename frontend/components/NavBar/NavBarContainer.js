import {connect} from 'react-redux';
import {login, logout} from '../../actions/session_actions';
import NavBar from './NavBar';
import { openModal } from '../../actions/modal_actions';
import { fetchCarts } from '../../actions/cart_actions'

const mSTP = state => ({
    currentUser: state.entities.users[state.session.id],
    itemCount: Object.values(state.entities.carts).length
})


const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    login: (user) => dispatch(login(user)),
    fetchCarts: () => dispatch(fetchCarts())
})

export default connect(mSTP, mDTP)(NavBar);