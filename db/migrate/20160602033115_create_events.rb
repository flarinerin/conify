class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :label,  null: false
      t.text :description
      t.integer :location_id, null: false
      t.datetime :start_at, null: false
      t.datetime :end_at, null: false

      t.timestamps null: false
    end

    add_foreign_key :events, :locations
  end
end
