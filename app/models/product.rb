class Product < ApplicationRecord
    validates :title, :price, :description, :seller_id, presence: true

    belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

    has_many :reviews,
    class_name: :Review,
    foreign_key: :product_id

    belongs_to :cart,
    class_name: :Cart,
    foreign_key: :product_id,
    optional: true

    has_one_attached :photo

    def getAverageReview
        return 0 if self.reviews.length == 0
        
        average = 0

        self.reviews.each do |review|
            average += review.rating
        end

        average = average.to_f / self.reviews.length
    end
end