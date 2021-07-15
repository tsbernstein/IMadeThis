class FixReviews < ActiveRecord::Migration[5.2]
  def change
    remove_index :reviews, :author_id
    remove_index :reviews, :product_id

    change_column_null :reviews, :author_id, true
    change_column_null :reviews, :product_id, true
    change_column_null :reviews, :body, true
    change_column_null :reviews, :rating, true
  end
end
