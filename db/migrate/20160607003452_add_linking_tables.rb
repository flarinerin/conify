class AddLinkingTables < ActiveRecord::Migration
  def change
    create_table :event_speakers do |t|
      t.integer :event_id,  null: false
      t.integer :speaker_id,  null: false
      t.timestamps
    end

    add_foreign_key :event_speakers, :events
    add_foreign_key :event_speakers, :speakers

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
