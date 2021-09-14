class FixProductIdFromCart < ActiveRecord::Migration[5.2]
  def change
    remove_column :carts, :product_id, :integer

    add_column :carts, :product_id, :integer
    add_index :carts, :product_id
  end
end
