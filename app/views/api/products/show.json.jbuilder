json.product do
    json.partial! 'api/products/product', product: @product
    json.photoUrl url_for(@product.photo)
    json.reviewIds @product.reviews.pluck(:id)
end

json.reviews do
  @product.reviews.each do |review|
      json.set! review.id do
        json.partial! 'api/reviews/review', review: review
      end
    end
  
    # json.authors do
    #   json.set! review.author.id do
    #     json.extract! review.author, :id, :first_name
    #   end
    # end
end