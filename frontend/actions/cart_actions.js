import * as APIUtil from '../util/cart_api_util'

export const RECIEVE_CART = 'RECIEVE_CART'

const recieveCart = ({ cart, user, products }) => ({
    type: RECIEVE_CART,
    cart,
    user,
    products
})

export const fetchCart = (cartId) => dispatch => (
    APIUtil.fetchCart(cartId).then((cartId) => dispatch(recieveCart(cartId)))
)

export const createCart = (cart) => dispatch => (
    APIUtil.createCart(cart).then((cart) => dispatch(recieveCart(cart)))
)

export const updateCart = (cart) => dispatch => (
    APIUtil.updateCart(cart).then((cart) => dispatch(recieveCart(cart)))
)