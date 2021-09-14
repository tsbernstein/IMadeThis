export const fetchCart = (cartId) => (
    $.ajax({
        method: 'GET',
        url: `api/carts/${cartId}`
    })
)

export const createCart = cart => (
    $.ajax({
        method: 'POST',
        url: 'api/carts',
        data: { cart }
    })
)

export const updateCart = cart => (
    $.ajax({
        url: `/api/carts/${cart.id}`,
        method: `PATCH`,
        data: {cart}
    })
)