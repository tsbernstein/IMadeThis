class UpdateCarts < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :quantity, :integer, null: false
    remove_column :carts, :product_id
    add_column :carts, :product_id, :integer, null: false
  end
end
