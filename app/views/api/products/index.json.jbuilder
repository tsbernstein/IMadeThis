@products.each do |product|
    json.set! product.id do
        json.partial! 'product', product: product
        json.photoUrl url_for(product.photo)
        json.reviewIds product.reviews.pluck(:id)
    end
end