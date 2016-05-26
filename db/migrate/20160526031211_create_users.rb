class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string :username,  null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :reset_password_token
      t.datetime :reset_password_token_exp
      t.timestamps
    end

    add_index :users, :email,                unique: true
    add_index :users, :username,             unique: true
    add_index :users, :reset_password_token, unique: true
  end

  def down
    drop_table :users
  end
end
