class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :label,  null: false
      t.float :latitude
      t.float :longitude
      t.string :address_line1
      t.string :address_line2
      t.string :city
      t.string :state
      t.string :postal_code

      t.timestamps null: false
    end
  end
end
