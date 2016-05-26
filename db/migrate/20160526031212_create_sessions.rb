class CreateSessions < ActiveRecord::Migration
  def up
    create_table :sessions do |t|
      t.string   :key,        null: false
      t.datetime :expiration
      t.integer  :user_id

      t.timestamps
    end

    add_index :sessions, :key, unique: true
  end

  def down
    drop_table :sessions
  end
end
