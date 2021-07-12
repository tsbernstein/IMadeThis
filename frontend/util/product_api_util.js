export const fetchProducts = () => (
    $.ajax({
        method: 'GET',
        url: '/api/products',
    })
)

export const fetchProduct = id => (
    $.ajax({
        method: 'GET',
        url: `/api/products/${id}`
    })
)

export const createProduct = productForm => (
    $.ajax({
        method: 'POST',
        url: '/api/products',
        data: productForm
    })
)