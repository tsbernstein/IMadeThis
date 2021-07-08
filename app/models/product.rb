class Product < ApplicationRecord
    validates :title, :price, :description, :seller_id, presence: true

    belongs_to :seller,
    primary_key: :id,
    foreign_key: :seller_id,
    class_name: :User
end