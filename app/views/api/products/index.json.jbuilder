@products.each do |product|
    json.set! product.id do
        json.partial! 'product', product: product
        json.photoUrl url_for(product.photo)
        json.average product.getAverageReview
        json.totalReviews product.reviews.length
    end
end