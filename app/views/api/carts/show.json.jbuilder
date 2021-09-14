json.cart do
    json.partial! '/api/carts/cart', cart: @cart
end

json.user do
    json.partial! '/api/users/user', user: @cart.user
end