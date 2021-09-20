export const fetchCarts = () => (
    $.ajax({
        method: 'GET',
        url: `/api/carts`
    })
)

export const fetchCart = (cartId) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}`
    })
)

export const createCart = cart => (
    $.ajax({
        method: 'POST',
        url: '/api/carts',
        data: { cart }
    })
)

export const updateCart = cart => (
    $.ajax({
        method: `PUT`,
        url: `/api/carts/${cart.id}`,
        data: { cart }
    })
)

export const deleteCart = cartId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/carts/${cartId}`
    })
)