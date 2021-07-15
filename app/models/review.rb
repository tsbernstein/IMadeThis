class Review < ApplicationRecord
    validates :author_id, :product_id, :rating, :body, presence: true
    validates :rating, inclusion: { in: (1..5) }

    belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end