json.product do
  json.partial! 'api/products/product', product: @product
  json.photoUrl url_for(@product.photo)
end

json.reviews do
  @product.reviews.each do |review|
    json.set! review.id do
      json.partial! 'api/reviews/review', review: review
    end
  end
end