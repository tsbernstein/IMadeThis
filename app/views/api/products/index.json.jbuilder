@products.each do |product|
    json.set! product.id do
        json.partial! 'product', product: product
    end
end

json.array! @products do |product|
    json.extract! product, :id, :title
    json.photoUrl url_for(product.photo)
end