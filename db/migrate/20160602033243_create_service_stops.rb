class CreateServiceStops < ActiveRecord::Migration
  def change
    create_table :service_stops do |t|
      t.string :label,  null: false
      t.integer :type, null: false
      t.integer :location_id, null: false

      t.timestamps null: false
    end

    add_foreign_key :service_stops, :locations
  end
end
