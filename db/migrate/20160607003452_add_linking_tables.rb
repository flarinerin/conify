class AddLinkingTables < ActiveRecord::Migration
  def change

    create_table :event_speakers, id: false do |t|
      t.belongs_to :event, index: true
      t.belongs_to :speaker, index: true
    end

    create_table :user_favorites do |t|
      t.integer :user_id,  null: false
      t.integer :event_id,  null: false
      t.integer :order_by, null: false
      t.timestamps
    end

    add_foreign_key :user_favorites, :users
    add_foreign_key :user_favorites, :events
  end
end
