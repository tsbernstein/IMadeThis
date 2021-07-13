class RenameDisplayNameToFirstName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :username, :email
    rename_column :users, :display_name, :first_name
  end
end
