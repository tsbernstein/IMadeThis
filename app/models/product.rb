class Product < ApplicationRecord
    validates :title, :price, :description, :seller_id, presence: true

    belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User

    has_many :reviews,
    class_name: :Review,
    foreign_key: :product_id

    has_one_attached :photo
end