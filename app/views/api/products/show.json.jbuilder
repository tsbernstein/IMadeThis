json.product do
    json.partial! 'api/products/product', product: @product
    json.photoUrl url_for(@product.photo)
end