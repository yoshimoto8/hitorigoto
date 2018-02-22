class UsersFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.integer :hitorigoto_id
    end
    add_index :favorites, :user_id
    add_index :favorites, :hitorigoto_id
    add_index :favorites, [:user_id, :hitorigoto_id], unique: true
  end
end
