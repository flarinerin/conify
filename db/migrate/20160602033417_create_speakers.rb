class CreateSpeakers < ActiveRecord::Migration
  def change
    create_table :speakers do |t|
      t.string :label,  null: false
      t.string :name
      t.text :bio
      t.integer :user_id, null: false
      t.string :email, null: false
      t.string :phone, null: false

      t.timestamps null: false
    end
  end
end
