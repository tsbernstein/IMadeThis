class Cart < ApplicationRecord
    validates :user_id, :quantity, :product_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id

    has_many :products,
    class_name: :Product,
    foreign_key: :product_id
end