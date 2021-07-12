json.product do
    json.partial! 'api/products/product', product: @product
end

json.image url_for(@product.photo)