class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :comment
      t.integer :event_id, null: false
      t.integer :rating

      t.timestamps null: false
    end

    add_foreign_key :comments, :events
  end
end
