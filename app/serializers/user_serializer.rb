# == Schema Information
#
# Table name: users
#
#  id                       :integer          not null, primary key
#  username                 :string           not null
#  email                    :string           not null
#  password_digest          :string           not null
#  reset_password_token     :string
#  reset_password_token_exp :datetime
#  created_at               :datetime
#  updated_at               :datetime
#
# Indexes
#
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_username              (username) UNIQUE
#

class UserSerializer < ActiveModel::Serializer
  embed :ids
  attributes :id, :username, :email, :created_at, :updated_at

  has_many :speakers
  has_many :user_favorites
end
