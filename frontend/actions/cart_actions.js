import * as APIUtil from '../util/cart_api_util';

export const RECIEVE_CART = 'RECIEVE_CART';
export const RECIEVE_CARTS = 'RECIEVE_CARTS';
export const DELETE_CART = 'DELETE_CART';

const recieveCart = ({ cart, user, products }) => ({
    type: RECIEVE_CART,
    cart,
    user,
    products
})

const recieveCarts = (carts) => ({
    type: RECIEVE_CARTS,
    carts
})

const removeCart = (cart) => ({
    type: DELETE_CART,
    cart
})

export const fetchCart = (cartId) => dispatch => (
    APIUtil.fetchCart(cartId).then((cartId) => dispatch(recieveCart(cartId)))
)

export const fetchCarts = () => dispatch => (
    APIUtil.fetchCarts().then((carts) => dispatch(recieveCarts(carts)))
)

export const createCart = (cart) => dispatch => (
    APIUtil.createCart(cart).then((cart) => dispatch(recieveCart(cart)))
)

export const updateCart = (cart) => dispatch => {
    return (
        APIUtil.updateCart(cart).then((cart) => dispatch(recieveCart(cart)))
    )
}

export const deleteCart = (cartId) => dispatch => (
    APIUtil.deleteCart(cartId).then((cart) => dispatch(removeCart(cart)))
)